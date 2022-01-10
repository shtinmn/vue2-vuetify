<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import AppLayout from '@/layouts/App.vue'
import PlainLayout from '@/layouts/Plain.vue'

import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AppLayout,
    PlainLayout,
  },
})
class App extends Vue {}

export default App
</script>
