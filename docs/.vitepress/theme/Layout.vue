<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'


const { isDark } = useData()


function enableTransitions(): boolean {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async () => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
    .ready
})
</script>


<template>
  <DefaultTheme.Layout />
</template>


<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: .3s;
}
</style>
