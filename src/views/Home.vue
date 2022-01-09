<template>
  <hello-world />
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  components: {
    HelloWorld,
  },
})
</script>
