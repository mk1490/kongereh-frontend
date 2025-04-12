<template>
  <v-overlay
      :model-value="modelValue"
      persistent
      opacity="1"
      theme="dark"
      class="align-center justify-center"
  >
    <div class="d-flex flex-column align-center">
      <v-progress-circular
          :size="75"
          :width="5"
          color="primary"
          indeterminate
      >
      </v-progress-circular>
      <span class="mt-4 text-h6 white--text">در حال دریافت اطلاعات...</span>
    </div>
  </v-overlay>
</template>


<script>
import {mapGetters} from "vuex";

export default {
  name: "ProgressDialog",
  props: {
    modelValue: Boolean,
  },
  computed: {
    ...mapGetters(['loading'])
  },
  data() {
    return {
      progressContainer: null,
      realVisibility: true,
    }
  },
  mounted() {
    this.progressContainer = document.getElementById('progress-container');
  },
  created() {
    this.progressContainer = document.getElementById('progress-container');
  },
  watch: {
    loading: {
      handler(isVisible) {
        if (this.progressContainer !== null) {
          if (isVisible) {
            this.realVisibility = true;
            this.progressContainer.classList.remove('hide');
          } else {
            this.progressContainer.classList.add('hide');
            setTimeout(() => {
              this.realVisibility = false;
            }, 100);
          }
        }
      }
    }
  }
}
</script>

<style scoped>
span {
  display: flex;
  justify-content: center;
  font-family: VazirmatnUIFD, serif !important;
  margin-top: 2rem !important;
  color: white !important;
  font-size: 1.5rem !important;
}

.progress-text span {
  margin-top: 20px;
}


#progress-container {
  opacity: 1;
  transition: opacity 0.5s;
}

#progress-container .hide {
  opacity: 0;
}
</style>
