<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import {httpPost} from "@/plugins/http/httpRequest";

const props = defineProps({
  visible: Boolean,
  initialize: Object,
  data: Object,
})
const emits = defineEmits(['add', 'update', 'close'])

const model = ref({
  name: null,
  family: null,
  username: null,
  password: null,
})

function submit() {
  if (props.data) {
    httpPost(`/user`, {
      ...model.value,
    }, result => {
      emits('add', result)
    }, error => {

    })
  } else {

    httpPost(`/user`, {
      ...model.value,
    }, result => {
      emits('update', result)
    }, error => {

    })

  }

}

</script>

<template>
  <base-modal
      :title="data? 'ویرایش کاربر': 'تعریف کاربر جدید'"
      @submit="submit">

    <div class="v-row">
      <div class="v-col-12">
        <base-text-field
            label="نام"
            v-model="model.name"
        />
      </div>
    </div>
  </base-modal>
</template>

<style scoped>

</style>