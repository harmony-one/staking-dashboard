<template>
  <div>
    <div class="slider-block">
      <VueSlider
        v-model="currentRate"
        :max="maxRate"
        :included="true"
        :marks="marks"
        :disabled="true"
        :tooltip="'always'"
        :tooltip-formatter="rateTitle"
      >
        <template #tooltip="{ index }">
          <span class="tooltip">{{ currentRate }}%</span>
          <span class="tooltip-after">
            {{ maxChangeRateTitle }}
          </span>
        </template>
        <template v-slot:dot="{ value, focus }">
          <div class="dot" />
        </template>
      </VueSlider>
    </div>
    <div class="chart-container-commission">
      <ChartLine
        :chartdata="chartdata"
        :options="options"
        style="height: 300px;"
      />
    </div>
    <div class="chart-description">Last commission change {{ lastChange }}</div>
  </div>
</template>

<script>
import ChartLine from "./components/ChartLine"
import moment from "moment"
import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/antd.css"
import { percent } from "../../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

export default {
  name: "LineChartContainer",
  components: { ChartLine, VueSlider },
  props: ["history", "validator"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: data =>
            "Date: " + moment(data[0].xLabel).format("MMM DD, hh:mm"),
          label: data => "Rate: " + percent(data.yLabel / 100)
        }
      },
      // responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
            ticks: {
              callback: value => moment(value).format("MM.DD")
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              // max: 100,
              callback: function(value) {
                return value + "%"
              }
            },
            scaleLabel: {
              display: true,
              labelString: "Commission rate, %"
            }
          }
        ]
      }
    }
  }),
  computed: {
    currentRate() {
      return Math.round(this.validator.rate * 10000) / 100
    },
    maxRate() {
      return Math.round(this.validator.max_rate * 10000) / 100
    },
    maxChangeRate() {
      return Math.round(this.validator.max_change_rate * 10000) / 100
    },
    maxChangeRateTitle() {
      return `+/- ${this.maxChangeRate}% daily change`
    },
    lastChange() {
      const lastUpdate = this.history[this.history.length - 1]

      const daysAgo = moment().diff(lastUpdate && lastUpdate.uctDate, "days")

      return daysAgo ? daysAgo + " days ago" : "today"
    },
    marks() {
      const marks = {}

      marks[0] = {
        label: "0%",
        labelStyle: {
          fontSize: "13px"
        }
      }

      marks[this.maxRate] = {
        label: this.maxRate + "%",
        labelStyle: {
          fontSize: "13px"
        }
      }

      return marks
    },
    chartdata() {
      return {
        labels: this.history.map(
          v => v.uctDate /* moment(v.uctDate).format("MM.DD") */
        ),
        datasets: [
          {
            label: "Rate",
            fill: false,
            borderColor: "#0a93eb",
            data: this.history.map(
              v => Math.round(v.rate * 10000) / 100
              // v => Math.round(Math.random() * 30)
            )
          }
        ]
      }
    }
  },
  methods: {
    rateTitle() {
      return `${this.currentRate}%`
    }
  }
}
</script>

<style>
.chart-container-commission .chartjs-render-monitor {
  border: 1px solid #dedede;
}

.chart-description {
  margin: 10px 0;
  font-size: 13px;
}

.slider-block {
  margin: 40px 50px 30px 10px;
}

.tooltip-after {
  position: absolute;
  color: #3ada2f;
  display: inline-block;
  margin-left: 10px;
  margin-top: 2px;
  font-size: 13px;
  width: 150px;
}

.tooltip {
  color: #0b93ea;
  margin-left: 9px;
}

.dot {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 17.3px 10px 0 10px;
  border-color: #0b93ea transparent transparent transparent;
}
</style>
