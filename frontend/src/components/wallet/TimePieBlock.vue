<template>
  <div class="next-epoch">
    <div class="chart-container-next-epoch">
      <ChartPie
        :chartdata="chartdata"
        :options="options"
        style="height: 48px; width: 48px; margin: auto"
      />
    </div>
    <div class="legend">next epoch:<br/>{{chartdata.legend}}</div>
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
      cutoutPercentage: 60,
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

.next-epoch {
  display: flex;
  width: 164px;
  align-items: center;
}

.legend {
  flex: 0 0 96px;
  line-height: 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.chart-container-next-epoch {
  margin-top: -10px;
}

</style>
