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
      let diff = isNaN(this.timeNextEpoch) ? 0 : Math.ceil(this.timeNextEpoch / 60)
      const dataDiff = 12 - (diff / 5 * 12)

      const data = [...new Array(12)].map((v, i) => 1)
      return {
        legend: `${diff} minute${ diff > 1 ? 's' : '' }`,
        diff,
        datasets: [
          {
            data,
            backgroundColor: data.map((d, i) => {
              return i < dataDiff ? '#00ADE844' : '#00ADE888'
            })
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

.next-epoch {
  display: flex;
  width: 164px;
  align-items: center;
}
@media screen and (max-width: 414px) {
  
  .next-epoch {
    width: 190px;
  }
}

.legend {
  flex: 0 0 96px;
  line-height: 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: var(--blue);
}

.chart-container-next-epoch {
  margin-top: -10px;
}

</style>
