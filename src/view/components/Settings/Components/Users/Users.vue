<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import {httpGet} from "@/plugins/http/httpRequest";
import BaseTable from "@view/widget/Base/BaseTable.vue";
import UserModal from "@view/components/Settings/Components/Users/UserModal.vue";

const table = ref({
  headers: [
    {title: 'نام', value: 'name'},
    {title: 'نام خانوادگی', value: 'family'},
  ],
  contents: [],
  actions: [],
})


const modal = ref({
  visible: false,
  data: null,
})

onMounted(() => {
  httpGet(`/user/list`, result => {
    table.value.contents = result;
  })
})

function define() {
  modal.value.data = null;
  modal.value.visible = true;
}
</script>

<template>
  <base-card-layout
      @buttonClick="define"
      button-title="تعریف کاربر جدید"
      title="مدیریت کاربران">

    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions"
    />


  </base-card-layout>

  <user-modal
      v-if="modal.visible"
      :visible="modal.visible"
      :data="modal.data"
      @close="modal.visible = false"
  />
</template>

<style scoped>

</style>