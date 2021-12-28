<template>
  <div>
    <div class="chart-container-stake-allocate">
      <ChartPie
        :chartdata="chartdata"
        :options="options"
        class="chart"
        :width="200"
        :height="200"
        @generated="setLegend"
      />
      <div class="legend-container" id="legend-container" v-html="legend"></div>
    </div>
  </div>
</template>

<script>
import ChartPie from "./components/ChartPie"
import { ones } from "scripts/num"
import { chartColors } from "./components/chartColors"

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

export default {
  name: "StakeAllocationBlock",
  components: { ChartPie },
  props: ["delegations"],
  data: () => ({
    legend: "",
    totalAmount: 0,
    options: {
      responsive: false,
      maintainAspectRatio: false,
      cutoutPercentage: 50,
      plugins: {
        labels: false
        // labels: {
        //   render: "percentage",
        //   fontColor: function(data) {
        //     const rgb = hexToRgb(data.dataset.backgroundColor[data.index])
        //     const threshold = 140
        //     const luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b
        //     return luminance > threshold ? "black" : "white"
        //   },
        //   precision: 0
        // }
      },
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (data, allData) => "Name: " + allData.labels[data[0].index],
          label: (data, allData) => {
            return (
              "Stake amount: " +
              ones(allData.datasets[0].data[data.index]).toFixed(0) +
              " ONE"
            )
          }
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{ display: false }],
        yAxes: [{ display: false }]
      },
      legendCallback: function(chart) {
        var legendHtml = []
        var item = chart.data.datasets[0]
        let totalAmount = 0
        let chartData = []
        for (var i = 0; i < item.data.length; i++) totalAmount += item.data[i]
        for (var i = 0; i < item.data.length; i++) {
          let label
          if (chart.data.labels[i].length > 18)
            label =
              chart.data.labels[i].slice(0, 13) +
              "..." +
              chart.data.labels[i].slice(-5)
          else label = chart.data.labels[i]
          chartData.push({
            background: item.backgroundColor[i],
            label,
            percent: Number((item.data[i] / totalAmount) * 100).toFixed(0)
          })
        }
        chartData.sort((a, b) => b.percent - a.percent)
        legendHtml.push("<ul>")
        chartData.forEach(elem =>
          legendHtml.push(`<li>
            <div>
              <span class="legend-col" style="background-color:${elem.background};"></span>
              ${elem.label}
            </div>
            <div>
              <span class="legendpercent">${elem.percent}%</span>
            </div>
            </li>`)
        )
        legendHtml.push("</ul>")
        return legendHtml.join("")
      }
    }
  }),
  computed: {
    chartdata() {
      // const stake_amount_total = history.reduce(
      //   (summ, v) => summ + v.stake_amount,
      //   0
      // )
      this.totalAmount = this.delegations.reduce((sum, v) => sum + v.amount, 0)
      const colors = [
        "#94DE69",
        "#4CB7F9",
        "#6864FF",
        "#8E2ADF",
        "#CC3ED0",
        "#FD5EAB",
        "#FFA267",
        "#F0E466",
        "#94DE69",
        "#4CB7F9",
        "#6864FF",
        "#8E2ADF",
        "#CC3ED0",
        "#FD5EAB",
        "#FFA267",
        "#F0E466",
        "#94DE69",
        "#4CB7F9",
        "#6864FF",
        "#8E2ADF",
        "#CC3ED0",
        "#FD5EAB",
        "#FFA267",
        "#F0E466"
      ]

      return {
        labels: this.delegations.map(v => v.validator),
        datasets: [
          {
            data: this.delegations.map(v => v.amount),
            backgroundColor: colors
          }
        ]
      }
    }
  },
  methods: {
    setLegend(html) {
      this.legend = html
    }
  }
}
</script>

<style lang="scss">
.chart-container-stake-allocate {
  display: flex;
  height: 50%;
  margin: 0 auto;
}

.chart {
  margin: auto;
  margin-right: 30px;
}
.legend-container {
  width: 100%;
  height: 225px;
  overflow: auto;
  li {
    display: flex;
    justify-content: space-between;
  }
  .legend-col {
    width: 12px;
    height: 12px;
    display: inline-block;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .legend-container {
    width: 100%;
    height: auto;
    min-height: 56px;
  }

  .chart-container-stake-allocate {
    width:100%;
    display: inline-block;

    .chart {
      display: inline-block;
      margin-bottom: 16px;
    }
  }
}
</style>
