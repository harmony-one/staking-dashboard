<template>
  <div>
    <div class="chart-container">
      <ChartLine
        :chartdata="chartdata"
        :options="options"
        style="height: 300px; width: 100%;"
      />
    </div>
  </div>
</template>

<script>
import ChartLine from "./PageValidatorCharts/components/ChartLine"
import { ones, zeroDecimals } from "../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

export default {
  name: "SeatAllocationHistory",
  components: { ChartLine },
  props: ["data", "median", "networkInfo"],
  data: () => ({
    options: {
      responsive: true,
      plugins: {
        labels: false,
      },
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (data) => "",
          label: (data) => `${zeroDecimals(data.yLabel)} % seats elected at epoch ${data.xLabel}`
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'epochs'
            },
            display: true,
            gridLines: {
              display: false
            },
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: '% elected'
            },
            display: true,
            gridLines: {
              display: true
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100
            }
          }
        ]
      }
    }
  }),
  computed: {
    chartdata() {
      //data is history
      const epochs = Object.keys(this.data)
      const data = epochs.sort().map((k) =>
        this.data[k].total_seats_used / this.data[k].total_seats * 100
      )
      return {
        labels: epochs,
        datasets: [
          {
            backgroundColor: '#00ADE888',
            borderColor: 'transparent',
            pointRadius: 0,
            minHeight: 100,
            lineTension: 0,
            data
          }
        ]
      }
      /********************************
      Seats per shard
      ********************************/
      // const epochs = Object.keys(this.data)
      // const elected = epochs.sort().map((k) => this.data[k].total_seats_used)
      // const electedPerShard = epochs.sort().map((k) => this.data[k].externalShards.map((s) => s.external))
      // const colors = ['#00ADE8', '#4fe7c8', 'rgb(27, 41, 94)', 'rgb(117, 135, 150)']
      // const datasets = [0, 1, 2, 3].map((i) => ({
      //   label: "S" + i, //not used in chart
      //   data: electedPerShard.map((d) => d[i]),
      //   borderColor: colors[i],
      //   backgroundColor: 'transparent',
      //   pointRadius: 0,
      // }))
      // return {
      //   labels: epochs,
      //   datasets
      // }
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
