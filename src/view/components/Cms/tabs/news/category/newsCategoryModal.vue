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

function submit() {
  if (props.data) {
    httpPut(`/news-category/${props.data.id}`, {
      ...model.value,
    }, result => {
      emits('update', result);
    })
  } else {
    httpPost(`/news-category`, {
      ...model.value,
    }, result => {
      emits('add', result);
    })
  }
}

</script>

<template>
  <base-modal
      title="تعریف دسته‌بندی جدید"
      @close="emits('close')"
      @submit="submit"
      :visible="props.visible">

    <div class="v-row">
      <div class="v-col-12">
        <base-text-field
            label="عنوان"
            v-model="model.title"
        />
      </div>
    </div>

  </base-modal>
</template>

<style scoped>

</style>