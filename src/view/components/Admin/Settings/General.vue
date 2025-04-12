<script>
export default {
  name: "General",
  props: {
    value: Object,
  },
  emits: ['save'],
  created() {
    if (this.value) {
      this.model.homePageReturnTimeInSeconds = this.value.homePageReturnTimeInSeconds;
      this.model.imageSliderDurationInSeconds = this.value.imageSliderDurationInSeconds;
      this.model.messageTitle = this.value.messageTitle;
      this.model.messageSpeed = this.value.messageSpeed;
    }
  },
  data() {
    return {
      model: {
        homePageReturnTimeInSeconds: 0,
        imageSliderDurationInSeconds: 0,
        messageTitle: null,
        messageSpeed: 50,
      }
    }
  },
  watch: {
    'model': {
      handler() {
        this.$emit('input', this.model)
      },
      deep: true,
    }
  }
}
</script>

<template>
  <v-card>
    <v-card-text>
      <div class="v-row">
        <div class="v-col-12">
          <div class="v-row align-center">
            <div class="v-col-3">
              <label>
                مدّت زمان نمایش مشخّصات و برگشت به صفحۀ اصلی
              </label>
            </div>
            <div class="v-col-3">
              <base-text-field
                  type="number"
                  max="60"
                  class="mx-3"
                  v-model="model.homePageReturnTimeInSeconds"
                  suffix="ثانیه"/>
            </div>

          </div>
          <div class="v-row align-center">
            <div class="v-col-3">
              <label>مدّت زمان اسلایدر تصویر</label>
            </div>
            <div class="v-col-3">
              <base-text-field
                  type="number"
                  max="60"
                  class="mx-3"
                  v-model="model.imageSliderDurationInSeconds"
                  suffix="ثانیه"/>
            </div>
          </div>
          <div class="v-row align-center">
            <div class="v-col-3">
              <label>متن عنوان پیام زیرنویس</label>
            </div>
            <div class="v-col-3">
              <base-text-field
                  max="100"
                  class="mx-3"
                  v-model="model.messageTitle"/>
            </div>
          </div>
          <div class="v-row align-center">
            <div class="v-col-3">
              <label>درصد سرعت پیام زیرنویس</label>
            </div>
            <div class="v-col-3">
              <base-text-field
                  type="number"
                  max="100"
                  class="mx-3"
                  v-model="model.messageSpeed"
                  suffix="%"/>
            </div>
          </div>

        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
          @click="$emit('save')"
          color="primary">
        ذخیره
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
