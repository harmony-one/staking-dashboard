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

export default {
  name: "AllStakesChart",
  components: { ChartBar },
  props: ["raw", "eff", "median", "networkInfo", "validators"],
  computed: {
    median: function() {
      console.log('MEDIAN', this.median)
    }
  },
  data: function() {
    return {
      options: {
        plugins: {
          labels: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: "index",
          intersect: false,
          custom: function(tooltipModel) {
            var tooltipEl = document.getElementById('chartjs-tooltip')
            tooltipModel.y = Math.max(35, tooltipModel.y)
          },
          callbacks: {
            title: (data) => "",
            label: ({datasetIndex, xLabel, yLabel}) => {
              if (datasetIndex === 0) {
                return `${yLabel} effective stake`
              }
              return `${yLabel} total bids`
            }
          }
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              stacked: true,
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: true
              },
              ticks: {
                suggestedMin: 0,
                max: this.median * 2,
                callback: (value) => value < this.median * 2 && value > this.median * 1.9 ? '' : Math.floor(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
            }
          ]
        }
      }
    }
  },
  computed: {
    chartdata() {

      const data = this.raw.map((v, i) => ({ raw: Math.floor(ones(v)), eff: Math.floor(ones(this.eff[i])) }))
        .sort((a, b) => a.raw - b.raw).reverse()

        
        //.sort((a, b) => a.eff - b.eff)
      //labels
      const labels = data.map((v, i) => i+1)
      //map out indiv stakes
      const rawStake = data.map((v) => v.raw)
      const effStake = data.map((v) => v.eff)
      //median and colors
      const even = effStake.length % 2 === 0
      const median = Math.floor(effStake.length/2)
      const colors = effStake.map((v, i) => {
        if (even && (i === median || i === median+1)) {
          return 'rgba(102, 161, 255, 0.75)'
        } else if (i === median) {
          return 'rgba(102, 161, 255, 0.75)'
        }
        return '#00ADE844'
      })
      
      return {
        labels,
        datasets: [
          {
            label: "Effective Stake",
            data: effStake,
            borderColor: colors,
            backgroundColor: colors,
            borderWidth: 1,
          },
          {
            label: "Bid",
            backgroundColor: '#4fe7c888',
            data: rawStake,
            minHeight: 16,
            borderWidth: 0,
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.chart-container {
  background: white;
  border: 1px solid var(--light2);
  padding: var(--unit);
  border-radius: var(--unit);
}

@media screen and (max-width: 414px) {
  .chart-container {
    border-left: none;
    border-right: none;
    border-radius: 0;
    width: 100vw;
    margin-left: -32px;
  }
}

</style>
