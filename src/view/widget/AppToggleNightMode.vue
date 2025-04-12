<template>
  <v-btn
      icon
      @click="toggleThemeDark"
  >
    <v-icon>{{ toggleThemeDarkIcon }}</v-icon>
  </v-btn>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'AppToggleNightMode',
  computed: {
    ...mapGetters([]),
    toggleThemeDarkIcon() {
      return this.themeDark ? 'ri-sun-fill' : 'ri-moon-fill';
    },
  },
  methods: {
    toggleThemeDark() {
      this.$store.dispatch('ThemeDarkToggle');
    },
  },
};
</script>
