<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import AccessPermissionModal from "@view/components/Settings/Components/AccessPermissions/AccessPermissionModal.vue";
import BaseTable from "@view/widget/Base/BaseTable.vue";


const modal = ref({
  visible: false,
  data: null,
})

const table = ref({
  headers: [],
  contents: [],
  actions: [],
})

function define() {
  modal.value.data = null;
  modal.value.visible = true;
}

</script>

<template>
  <base-card-layout
      @buttonClick="define"
      button-title="تعریف گروه کاربری جدید"
      title="مدیریت گروه‌های کاربری">

    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions"
    />
  </base-card-layout>

  <access-permission-modal
      :visible="modal.visible"
      :data="modal.data"
  />

</template>

<style scoped>

</style>