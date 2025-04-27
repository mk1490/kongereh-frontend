<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import BaseTable from "@view/widget/Base/BaseTable.vue";
import {httpGet} from "@/plugins/http/httpRequest";
import CmsCategoryModal from "@view/components/Cms/widgets/cmsCategoryModal.vue";
import {toastHandler} from "@/plugins/commonMethods/commonMethods";


const modal = ref({
  visible: false,
  data: null,
})


const table = ref({
  headers: [
    {title: 'عنوان', value: 'title'}
  ],
  contents: [],
  actions: [
    {
      type: 'edit',
      click: item => {
        toastHandler.isDeveloping();
      }
    }
  ],
})

onMounted(() => {
  httpGet(`/cms/category/list`, result => {
    table.value.contents = result;
  })
})

function define() {
  modal.value.data = null;
  modal.value.visible = true;
}

function addItem(data) {
  table.value.contents.push(data);
  modal.value.visible = false;
}
</script>

<template>
  <base-card-layout
      @buttonClick="define"
      button-title="تعریف دسته جدید"
      title="مدیریت دسته بندی ها">

    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions"
    />


    <cms-category-modal
        v-if="modal.visible"
        :visible="modal.visible"
        @close="modal.visible = false"
        @add="addItem"
        @update="updateItem"
    />
  </base-card-layout>
</template>

<style scoped>

</style>