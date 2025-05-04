<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import BaseTextArea from "@view/widget/Base/BaseTextArea.vue";
import {httpPost} from "@/plugins/http/httpRequest";

const props = defineProps({
  visible: Boolean,
  data: Object,
  initialize: Object,
})


const model = ref({
  title: null,
  content: null,
})




function submit() {
  httpPost(``, {
    ...model.value
  }, result => {
    emits('add')
  }, error => {

  })
}
</script>

<template>
  <base-modal
      @submit="submit"
      title="تعریف خبر جدید"
      :visible="props.visible">


    <div class="v-row">
      <div class="v-col-12">
        <base-text-field
            label="عنوان"
            v-model="model.title"
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