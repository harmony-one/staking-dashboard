<template>
  <div>
    <div class="chart-container">
      <ChartBar
        :chartdata="chartdata"
        :options="options"
        style="height: 300px; width: 100%;"
      />
    </div>
  </div>
</template>

<script>
import ChartBar from "./PageValidatorCharts/components/ChartBar"
import { ones, zeroDecimals } from "../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

const isEqualArr = (a, b) =>
  a.length === b.length && a.every((item, idx) => item === b[idx])

export default {
  name: "SeatAllocationHistory",
  components: { ChartBar },
  props: ["data"],
  data: () => ({
    elected: [],
    total: [],
    options: {
      responsive: true,
      plugins: {
        labels: false
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
        custom: function(tooltip) {
          if (!tooltip) return
          tooltip.displayColors = false
        },
        callbacks: {
          title: data => "",
          label: ({ datasetIndex, xLabel, yLabel }) => {
            if (datasetIndex === 0) {
              return `${yLabel} seats elected out of`
            }
            return `${yLabel} total seats at ${xLabel}`
          }
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },
            stacked: true
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: true
            },
            ticks: {
              min: 0
            }
          }
        ]
      }
    }
  }),
  mounted() {
    this.calculateChartData()
  },
  watch: {
    data() {
      this.calculateChartData()
    }
  },
  methods: {
    calculateChartData() {
      const shards = this.data || []

      const elected = shards.map(s => s.external)
      const total = shards.map(s => s.total)

      if (!isEqualArr(this.elected, elected)) {
        this.elected = elected
      }

      if (!isEqualArr(this.total, total)) {
        this.total = total
      }
    }
  },
  computed: {
    chartdata() {
      const labels = [0, 1, 2, 3].map(s => "Shard " + s)

      const colors = ["#00ADE844", "#00ADE844"]

      return {
        labels,
        datasets: [
          {
            backgroundColor: colors[0],
            data: this.elected
          },
          {
            backgroundColor: colors[1],
            data: this.total
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  background: white;
  margin-bottom: var(--double);
}
</style>
