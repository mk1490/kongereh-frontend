<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import CategoryModal from "@view/components/Settings/Components/Categories/CategoryModal.vue";
import BaseTable from "@view/widget/Base/BaseTable.vue";
import {httpGet} from "@/plugins/http/httpRequest";


const table = ref({
  headers: [
    {text: 'عنوان', value: 'title'},
  ],
  contents: [],
  actions: [
    {
      title: 'حذف',
      icon: 'ri-delete-bin-7-fill',
      click: item => {

      }
    },
    {
      title: 'ویرایش',
      icon: 'ri-pencil-fill',
      click: item => {

      }
    }
  ],
})

const modal = ref({
  visible: false,
})


onMounted(() => {
  httpGet(`/document-category/list`, result => {
    table.value.contents = result;
  })
})


function define() {
  modal.value.visible = true
}

function add(data) {
  table.value.contents.push(data);
  modal.value.visible = false;
}


function update(data) {
  modal.value.visible = false;
}


</script>

<template>
  <base-card-layout
      @buttonClick="define"
      button-title="تعریف دسته جدید"
      title="دسته‌بندی">


    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions"

    />

  </base-card-layout>


  <category-modal
      v-if="modal.visible"
      :visible="modal.visible"
      @close="modal.visible = false"
      @add="add"
      @update="update"


  />

</template>

<style scoped>

</style>