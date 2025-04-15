<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseKeyValueSimpleTable from "@view/widget/Base/BaseKeyValueSimpleTable.vue";

const props = defineProps({
  visible: Boolean,
  data: Object,
})


const emits = defineEmits(['close'])


</script>

<template>

  <base-modal
      title="مشاهده جزئیات درخواست پشتیبانی"
      :visible="props.visible"
      @close="emits('close')">

    <base-key-value-simple-table />

  </base-modal>
</template>

<style scoped>

</style>