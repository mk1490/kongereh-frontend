<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import {httpPost} from "@/plugins/http/httpRequest";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";

const props = defineProps({
  visible: Boolean,
})

const emits = defineEmits(['close', 'add', 'update'])

function submit() {
  httpPost(`/cms/category`, {
    ...model.value
  }, result => {
    emits('add', result);
  })
}

const model = ref({
  title: null,
})
</script>

<template>
  <base-modal
      @submit="submit"
      @close="emits('close')"
      :visible="visible"
      title="تعریف دسته‌بندی جدید">


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