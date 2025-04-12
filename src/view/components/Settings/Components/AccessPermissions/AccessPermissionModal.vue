<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";

const props = defineProps({
  visible: Boolean,
  data: Object,
})


const emits = defineEmits(['submit', 'close'])

</script>

<template>
  <base-modal
      :title="props.data? 'ویرایش گروه کاربری':'تعریف گروه کاربری جدید'"
      :visible="props.visible"
      @close="emits('close')">
    <div class="v-row">
      <div class="v-col-12">
        <base-text-field
            label="عنوان"
        />
      </div>
    </div>
  </base-modal>
</template>

<style scoped>

</style>