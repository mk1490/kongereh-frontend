<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import {httpPost, httpPut} from "@/plugins/http/httpRequest";

const props = defineProps({
  visible: Boolean,
  data: Object,
})


const emits = defineEmits(['add', 'update', 'close'])

const model = ref({
  title: null,
})

onMounted(() => {
  if (props.data) {
    model.value.title = props.data.title;
  }
})


function submit() {
  const payload = {
    ...model.value,
  }
  if (props.data) {
    httpPut(`/document-category/${props.data.id}`, payload, result => {
      emits('update', result)
    }, error => {

    })
  } else {
    httpPost(`/document-category`, payload, result => {

      emits('add', result)
    }, error => {

    })
  }
}


</script>

<template>
  <base-modal
      :title="props.data?'ویرایش دسته': 'تعریف دسته جدید'"
      :visible="props.visible"
      @submit="submit"
      @close="emits('close')">



    <div class="row">
      <div class="col-12">
        <base-text-field
            v-model="model.title"
            label="عنوان"
        />
      </div>
    </div>


  </base-modal>
</template>

<style scoped>

</style>