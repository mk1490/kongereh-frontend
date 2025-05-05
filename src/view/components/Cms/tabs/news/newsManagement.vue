<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import BaseButton from "@view/widget/Base/BaseButton.vue";
import NewsCategoryManagement from "@view/components/Cms/tabs/news/category/newsCategoryManagement.vue";
import {httpGet} from "@/plugins/http/httpRequest";
import BaseTable from "@view/widget/Base/BaseTable.vue";
import NewsModal from "@view/components/Cms/tabs/news/newsModal.vue";


const modal = ref({
  newsCategory: {
    visible: false,
    data: null,
  },
  visible: false,
  initialize: null,
  data: null,
})


const table = ref({
  headers: [
    {title: 'عنوان', value: 'title'},
    {title: 'شرح', value: 'description'},
    {title: 'اسلاگ', value: 'slug'},
  ],
  contents: [],
  actions: [],
})


onMounted(() => {
  httpGet(`/news/list`, result => {
    table.value.contents = result
  })

})


function newsCategoryModal() {
  httpGet(`/news-category/list`, result => {
    modal.value.newsCategory.data = result;
    modal.value.newsCategory.visible = true;
  })
}


function define() {
  httpGet(`/news/initialize`, result => {
    modal.value.data = null;
    modal.value.initialize = result;
    modal.value.visible = true;
  })
}


function addItem(data) {
  table.value.contents.push(data);
  modal.value.visible = false
}


function updateItem(data) {
  modal.value.visible = false
}

</script>

<template>
  <base-card-layout
      @buttonClick="define"
      button-title="تعریف خبر جدید"
      title="مدیریت اخبار">


    <template #button-area>

      <base-button
          label="دسته‌بندی"
          @click="newsCategoryModal"

      />
    </template>


    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions"
    />

    <news-modal
        v-if="modal.visible"
        :visible="modal.visible"
        :initialize="modal.initialize"
        @close="modal.visible = false"
        @add="addItem"
        @update="updateItem"
    />


    <news-category-management
        v-if="modal.newsCategory.visible"
        :visible="modal.newsCategory.visible"
        :data="modal.newsCategory.data"
    />

  </base-card-layout>
</template>

<style scoped>

</style>