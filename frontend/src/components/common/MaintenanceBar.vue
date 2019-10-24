<template>
  <div>
    <div v-for="message in maintenance" :key="message.id">
      <Bar :bar-type="message.type" :show="message.show">{{
        message.message
      }}</Bar>
    </div>
  </div>
</template>

<script>
import Bar from "common/Bar"
export default {
  name: `maintenance-bar`,
  components: {
    Bar
  },
  data: () => ({
    maintenance: []
  })
}
</script>
