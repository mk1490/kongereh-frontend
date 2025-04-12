<template>
  <v-app-bar
      app
      class="darken-3 navbar-background"
      dark
      flat
      :dense="true"
  >
    <app-date-time
        class="ms-14"
    />
    <v-spacer/>
    <app-profile/>

    <app-toggle-night-mode/>

    <app-sound-alarm-play
        v-if="soundPlaying"/>

    <full-screen/>
  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex';
import FullScreen from '../widget/AppFullScreen.vue';
import Localization from '../widget/AppLocalization.vue';
import Notification from '../widget/AppNotification.vue';
import AppDateTime from "../widget/AppDateTime.vue";
import AppSoundAlarmPlay from "../widget/AppSoundAlarmPlay.vue";
import AppToggleNightMode from "../widget/AppToggleNightMode.vue";
import AppProfile from "../widget/AppProfile.vue";

export default {
  name: 'TheLayoutToolbar',
  components: {
    AppProfile,
    AppToggleNightMode,
    AppSoundAlarmPlay,
    AppDateTime,
    FullScreen,
    Localization,
    Notification,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'navbarShow',
      'soundPlaying'
    ]),
    toggleNavbarIcon() {
      return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
    },
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('NavbarToggle');
    },
  },
};
</script>
