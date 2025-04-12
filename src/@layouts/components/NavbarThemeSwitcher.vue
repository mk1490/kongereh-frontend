<script setup lang="ts">
import type {ThemeSwitcherTheme} from '@layouts/types'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'light',
    icon: 'ri-moon-fill',
  },
  {
    name: 'dark',
    icon: 'ri-sun-fill',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes"/>
</template>
