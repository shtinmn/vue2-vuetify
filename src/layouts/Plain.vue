<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
class Plain extends Vue {}

export default Plain
</script>
