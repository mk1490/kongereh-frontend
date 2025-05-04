<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseTable from "@view/widget/Base/BaseTable.vue";

const props = defineProps({
  visible: Boolean,
  data: Array,
})

const table = ref({
  headers: [],
  contents: [],
})


onMounted(() => {
  table.value.contents = props.data;
})


</script>

<template>
  <base-modal
      title="دسته‌بندی اخبار"
      :visible="props.visible"
      full-screen>


    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="[]"
    />

  </base-modal>
</template>

<style scoped>

</style>