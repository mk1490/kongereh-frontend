<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import BaseTextArea from "@view/widget/Base/BaseTextArea.vue";
import {httpPost, httpPut} from "@/plugins/http/httpRequest";
import BaseSelect from "@view/widget/Base/BaseSelect.vue";

const props = defineProps({
  visible: Boolean,
  data: Object,
  initialize: Object,
})


const model = ref({
  title: null,
  content: null,
  categoryId: null,
})


const emits = defineEmits(['add', 'update', 'close'])


function submit() {
  if (props.data) {
    httpPut(`/news`, {
      ...model.value
    }, result => {
      emits('update', result);
    }, error => {

    })
  } else {
    httpPost(`/news`, {
      ...model.value
    }, result => {
      emits('add', result)
    }, error => {

    })
  }

}
</script>

<template>
  <base-modal
      :visible="props.visible"
      @submit="submit"
      @close="emits('close')"
      title="تعریف خبر جدید">

    <div class="v-row">
      <div class="v-col-12">
        <base-text-field
            label="عنوان"
            v-model="model.title"
        />
      </div>

      <div class="v-col-12">
        <base-select
            label="دسته‌بندی"
            :items="initialize.categories"
            v-model="model.categoryId"
        />
      </div>

      <div class="v-col-12">
        <base-text-area
            label="محتوای خبر"
            v-model="model.content"
        />
      </div>


    </div>


  </base-modal>
</template>

<style scoped>

</style>