<template>
  <div>
    <div class="chart-container-stake-allocate">
      <ChartPie
        :chartdata="chartdata"
        :options="options"
        style="height: 200px; width: 100%; margin: auto"
      />
    </div>
    <div class="legend">{{chartdata.legend}}</div>
  </div>
</template>

<script>
import ChartPie from "./components/ChartPie"
import { chartColors } from "./components/chartColors"
import { timeLeft } from '@/filters'

export default {
  name: "TimePieBlock",
  components: { ChartPie },
  props: ["timeNextEpoch"],
  filters: {
    timeLeft,
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 92,
      plugins: {
        labels: {
          render: () => ""
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{ display: false }],
        yAxes: [{ display: false }]
      }
    }
  }),
  computed: {
    chartdata() {
      let diff = isNaN(this.timeNextEpoch) ? 0 : Math.floor((600 - this.timeNextEpoch) / 60)

      const data = [...new Array(12)].map((v, i) => 1)

      return {
        legend: `${12-diff} minute${ diff > 1 ? 's' : '' }`,
        diff,
        datasets: [
          {
            data,
            backgroundColor: data.map((d, i) => {
              console.log(i)
              return i < diff ? '#00ADE888' : '#00ADE844'
            })
          }
        ]
      }
    }
  }
}
</script>

<style>
.chart-container-stake-allocate {
  margin: var(--unit) auto;
  position: relative;
}
.legend {
  margin-top: -104px;
  padding-bottom: 100px;
  width: 100%;
  text-align: center;
}

</style>
