<script setup>

import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import BaseDateTimeTextField from "@view/widget/Base/BaseDateTimeTextField.vue";

const props = defineProps({
  modelValue: Object,
})

const model = ref({
  name: null,
  family: null,
  fatherName: null,
  birthDate: null,
  martyrDate: null,
})


onMounted(() => {
  if (props.modelValue) {
    model.value.name = props.modelValue.name;
    model.value.family = props.modelValue.family;
    model.value.fatherName = props.modelValue.fatherName;
    model.value.birthDate = props.modelValue.birthDate;
    model.value.martyrDate = props.modelValue.martyrDate;
  }
})
</script>

<template>
  <div class="v-row">
    <div class="v-col-12">
      <base-text-field
          label="نام"
          required-symbol
          v-model="model.name"
      />
    </div>
    <div class="v-col-12">
      <base-text-field
          label="نام خانوادگی"
          required-symbol
          v-model="model.family"
      />
    </div>
    <div class="v-col-12">
      <base-text-field
          label="نام پدر"
          required-symbol
          v-model="model.fatherName"
      />
    </div>
    <div class="v-col-12">
      <base-date-time-text-field
          label="تاریخ تولّد"
          v-model="model.birthDate"
      />
    </div>
    <div class="v-col-12">
      <base-date-time-text-field
          label="تاریخ شهادت"
          v-model="model.martyrDate"
      />
    </div>
  </div>
</template>

<style scoped>

</style>