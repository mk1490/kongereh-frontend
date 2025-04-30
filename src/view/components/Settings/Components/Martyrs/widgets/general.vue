<script setup>

import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import BaseDateTimeTextField from "@view/widget/Base/BaseDateTimeTextField.vue";
import avatar from '@/assets/images/avatar.png'
import BaseButton from "@view/widget/Base/BaseButton.vue";
import {httpPost} from "@/plugins/http/httpRequest";

const props = defineProps({
  modelValue: Object,
})

const emits = defineEmits(['update:modelValue'])
const filePicker = ref(null)

let selectedFile = ref(null)
let selectedImage = ref(null)

const model = ref({
  name: null,
  family: null,
  fatherName: null,
  birthDate: null,
  martyrDate: null,
  martyrdomLocation: null,
  burialLocation: null,
})


onMounted(() => {
  setModel()
})


watch(model.value, () => {
  setModel()
  emits('update:modelValue', model.value)
})


function setModel() {
  if (props.modelValue) {
    model.value.name = props.modelValue.name;
    model.value.family = props.modelValue.family;
    model.value.fatherName = props.modelValue.fatherName;
    model.value.birthDate = props.modelValue.birthDate;
    model.value.martyrDate = props.modelValue.martyrDate;
    model.value.burialLocation = props.modelValue.burialLocation;
    model.value.martyrdomLocation = props.modelValue.martyrdomLocation;
  }
}

function openFilePicker() {
  filePicker.value.click();
}

function fileSelected(event) {
  selectedFile.value = event.target.files[0];
  if (props.modelValue.id) {
    uploadFile()
  }

}


function uploadFile(callback) {
  const formData = new FormData();
  formData.append("file", selectedFile.value);
  httpPost(`/martyr/upload-personal-image/${props.modelValue.id}`, formData, result => {
    if (selectedFile.value) {
      uploadFile(() => {
        callback(result);
      })
    } else {
      callback(result);
    }
  }, error => {

  })
}


const imageSrc = computed(() => {
  if (selectedImage.value) {
    return null;
  } else {
    return avatar;
  }

})
</script>

<template>
  <div class="v-row">

    <div class="v-col-8">
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


        <div class="v-col-12">
          <base-text-field
              label="محل شهادت"
              required-symbol
              v-model="model.martyrdomLocation"
          />
        </div>
        
        <div class="v-col-12">
          <base-text-field
              label="محل دفن"
              required-symbol
              v-model="model.burialLocation"
          />
        </div>
      </div>
    </div>


    <div class="v-col-4">
      <div class="d-flex justify-center">
        <v-avatar size="140">
          <v-img
              :src="imageSrc"
          />
        </v-avatar>
      </div>
      <div class="d-block d-flex justify-center">
        <base-button
            label="بارگذاری تصویر"
            @click="openFilePicker"
        />
      </div>
    </div>

  </div>
  <input
      ref="filePicker"
      type="file"
      hidden="hidden"
      accept="image/jpg,image/jpeg,image/png"
      @change="fileSelected"
  />
</template>

<style scoped>

</style>