<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import {httpGet} from "@/plugins/http/httpRequest";
import BaseTable from "@view/widget/Base/BaseTable.vue";

const table = ref({
  headers: [
    {title: 'نام', value: 'name'},
    {title: 'نام خانوادگی', value: 'family'},
  ],
  contents: [],
  actions: [],
})


onMounted(() => {
  httpGet(`/user/list`, result => {
    table.value.contents = result;
  })
})

function define() {

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
</template>

<style scoped>

</style>