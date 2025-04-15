<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import {httpPost, httpPut} from "@/plugins/http/httpRequest";
import BaseDateTimeTextField from "@view/widget/Base/BaseDateTimeTextField.vue";


const props = defineProps({
  visible: Boolean,
  data: Object,
})

const emits = defineEmits(['add', 'update', 'close']);

const model = ref({
  name: null,
  family: null,
  fatherName: null,
  birthDate: null,
  martyrDate: null,
})


onMounted(() => {
  if (props.data) {
    model.value.name = props.data.name;
    model.value.family = props.data.family;
    model.value.fatherName = props.data.fatherName;
    model.value.birthDate = props.data.birthDate;
    model.value.martyrDate = props.data.martyrDate;
  }
})


function submit() {

  let payload = {
    ...model.value,
  }


  if (props.data) {
    httpPut(`/martyr/${props.data.id}`, payload, result => {
      emits('update', result);
    }, error => {

    })

  } else {
    httpPost(`/martyr`, payload, result => {
      emits('add', result);
    }, error => {

    })
  }
}


</script>

<template>
  <base-modal
      :title="props.data? 'ویرایش آیتم': 'تعریف آیتم جدید'"
      @close="emits('close')"
      @submit="submit"
      :visible="props.visible">
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
  </base-modal>
</template>

<style scoped>

</style>