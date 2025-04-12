<template>
  <v-locale-provider rtl>
    <v-app>
      <router-view/>
      <progress-dialog :model-value="loading"/>
    </v-app>
  </v-locale-provider>
</template>
<script>
import {mapGetters} from "vuex";
import ProgressDialog from "@view/widget/ProgressDialog.vue";

export default {
  name: 'App',
  components: {ProgressDialog},
  computed: {
    ...mapGetters(['loading', 'isLogin']),
  },
};
</script>


<style scoped>
.align-center {
  align-items: center; /* تراز عمودی عناصر در وسط */
}

.justify-center {
  justify-content: center; /* تراز افقی عناصر در وسط */
}
</style>