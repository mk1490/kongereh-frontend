<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import BaseButton from "@view/widget/Base/BaseButton.vue";
import NewsCategoryManagement from "@view/components/Cms/tabs/news/category/newsCategoryManagement.vue";
import {httpGet} from "@/plugins/http/httpRequest";


const modal = ref({
  newsCategory: {
    visible: false,
    data: null,
  }
})


function newsCategoryModal() {
  httpGet(``, result => {
    modal.value.newsCategory.data = result;
    modal.value.newsCategory.visible = true;
  })

}


</script>

<template>
  <base-card-layout
      button-title="تعریف خبر جدید"
      title="مدیریت اخبار">


    <template #button-area>

      <base-button
          label="دسته‌بندی"
          @click="newsCategoryModal"

      />
    </template>


    <news-category-management
        v-if="modal.newsCategory.visible"
        :visible="modal.newsCategory.visible"
        :data="modal.newsCategory.data"
    />

  </base-card-layout>
</template>

<style scoped>

</style>