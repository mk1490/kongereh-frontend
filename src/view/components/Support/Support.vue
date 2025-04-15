<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import {httpGet} from '@/plugins/http/httpRequest'
import BaseTable from "@view/widget/Base/BaseTable.vue";


const table = ref({
  headers: [
    {text: 'عنوان'}
  ],
  contents: [],
  actions: [],
})


onMounted(() => {
  httpGet(`/support/list`, result => {
    table.value.contents = result;
  })
})


</script>

<template>

  <base-card-layout
      title="درخواست‌های پشتیبانی ثبت شده">


    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions"
    />


  </base-card-layout>

</template>

<style scoped>

</style>