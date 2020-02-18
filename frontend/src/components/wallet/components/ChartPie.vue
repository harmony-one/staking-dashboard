<script>
import { Pie } from "vue-chartjs"
import 'chartjs-plugin-labels';

export default {
  extends: Pie,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
