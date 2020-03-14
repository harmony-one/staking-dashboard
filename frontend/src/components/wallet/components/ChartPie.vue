<script>
import { Doughnut } from "vue-chartjs"
import 'chartjs-plugin-labels';

export default {
  extends: Doughnut,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null,
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
