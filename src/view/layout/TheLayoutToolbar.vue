<template>
  <v-app-bar
      app
      class="darken-3 navbar-background"
      dark
      flat
      :dense="true"
  >
    <app-date-time
        class="ms-3"
    />
    <v-spacer/>
    <app-profile/>
    <!--    <app-toggle-night-mode/>-->


    <!--    <full-screen/>-->
  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex';
import FullScreen from '../widget/AppFullScreen.vue';
import AppDateTime from "../widget/AppDateTime.vue";
import AppToggleNightMode from "../widget/AppToggleNightMode.vue";
import AppProfile from "@view/widget/AppProfile.vue";

export default {
  name: 'TheLayoutToolbar',
  components: {
    AppProfile,
    AppToggleNightMode,
    AppDateTime,
    FullScreen,
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
