<template>
  <v-btn
      icon
      @click="toggleFullScreen"
  >
    <v-icon :icon="toggleFullScreenIcon">{{ toggleFullScreenIcon }}</v-icon>
  </v-btn>
</template>

<script>
import {mapGetters} from 'vuex';

const toggleFullScreen = () => {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen = docEl.requestFullscreen
      || docEl.mozRequestFullScreen
      || docEl.webkitRequestFullScreen
      || docEl.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen
      || doc.mozCancelFullScreen
      || doc.webkitExitFullscreen
      || doc.msExitFullscreen;

  if (!doc.fullscreenElement
      && !doc.mozFullScreenElement
      && !doc.webkitFullscreenElement
      && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
    return true;
  }

  cancelFullScreen.call(doc);
  return false;
};

export default {
  name: 'AppFullScreen',
  computed: {
    ...mapGetters([]),
    toggleFullScreenIcon() {
      return this.fullscreenShow ? 'ri-fullscreen-exit-fill' : 'ri-fullscreen-fill';
    },
  },
  methods: {
    toggleFullScreen() {
      this.$store.dispatch('FullscreenToggle', {state: toggleFullScreen()});
    },
  },
};
</script>
