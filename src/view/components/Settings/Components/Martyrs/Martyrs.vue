<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import {httpDelete, httpGet, httpPost} from "@/plugins/http/httpRequest";
import BaseTable from "@view/widget/Base/BaseTable.vue";
import MartyrModal from "@view/components/Settings/Components/Martyrs/MartyrModal.vue";
import {getPersianTime} from "../../../../../plugins/commonMethods/commonMethods";


const modal = ref({
  visible: false,
  data: null,
  index: -1,
})


const table = ref({
  headers: [
    {text: 'نام', value: 'name'},
    {text: 'نام خانوادگی', value: 'family'},
    {text: 'نام پدر', value: 'fatherName'},
    {text: 'تاریخ تولّد', value: 'birthDate'},
    {text: 'تاریخ شهادت', value: 'martyrDate'},
  ],
  contents: [],
  actions: [
    {
      type: 'edit',
      click: item => {
        modal.value.index = table.value.contents.indexOf(item);
        modal.value.data = item;
        modal.value.visible = true;
      }
    },
    {
      type: 'delete',
      click: item => {
        httpDelete(`/martyr/${item.id}`, result => {
          table.value.contents.splice(table.value.contents.indexOf(item), 1)
        }, error => {

        })
      }
    }
  ]
})


onMounted(() => {
  httpGet(`/martyr/list`, result => {
    table.value.contents = result;
  })
})

function define() {
  modal.value.data = null;
  modal.value.visible = true;
}

function addItem(data) {
  table.value.contents.push(data)
  modal.value.visible = false;
}


function updateItem(data) {
  table.value.contents.splice(modal.value.index, 1, data)
  modal.value.visible = false;
}


</script>

<template>
  <base-card-layout
      @buttonClick="define"
      button-title="تعریف آیتم جدید"
      title="بانک اطلاعاتی شهدا">

    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions">
      <template v-slot:item.birthDate="{item}">
        {{ item.birthDate ? getPersianTime(item.birthDate, 'YYYY/MM/DD') : 'ثبت نشده' }}
      </template>
      <template v-slot:item.martyrDate="{item}">
        {{ item.martyrDate ? getPersianTime(item.martyrDate, 'YYYY/MM/DD') : 'ثبت نشده' }}
      </template>
    </base-table>

  </base-card-layout>


  <martyr-modal
      v-if="modal.visible"
      :visible="modal.visible"
      :data="modal.data"
      @close="modal.visible = false"
      @add="addItem"
      @update="updateItem"
  />

</template>

<style scoped>

</style>