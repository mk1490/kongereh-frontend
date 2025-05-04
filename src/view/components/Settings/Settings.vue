<script setup>

import BaseTabLayout from "@view/widget/Base/BaseTabLayout.vue";
import Users from "@view/components/Settings/Components/Users/Users.vue";
import AccessPermissions from "@view/components/Settings/Components/AccessPermissions/AccessPermissions.vue";
import Categories from "@view/components/Settings/Components/Categories/Categories.vue";
import Martyrs from "@view/components/Settings/Components/Martyrs/Martyrs.vue";
import MultipleImageGalleryUploader
  from "@view/components/Settings/Components/Martyrs/widgets/imageGallery/multipleImageGalleryUploader.vue";
import {httpGet} from "@/plugins/http/httpRequest";

const tabs = ref([
  // {title: 'کاربران', key: 'users'},
  // {title: 'گروه‌های کاربری', key: 'accessPermissions'},
  {title: 'بانک اطلاعاتی شهدا', key: 'martyrs'},
  {title: 'دسته‌بندی', key: 'categories'},
  {title: 'گالری شهدا', key: 'imageGallery'},
])


const imagesGallery = ref([]);

onMounted(() => {
  httpGet(`/image-gallery/list`, result => {
    imagesGallery.value = result;
  })
})

</script>

<template>
  <base-tab-layout
      :tabs="tabs">

    <template v-for="(tabItem,tabIndex) in tabs" v-slot:[`tab-${tabIndex+1}`]="{item}">
      <users
          v-if="tabItem.key === 'users'"
      />

      <access-permissions
          v-if="tabItem.key === 'accessPermissions'"
      />


      <categories
          v-if="tabItem.key === 'categories'"
      />


      <martyrs
          v-if="tabItem.key === 'martyrs'"
      />

      <multiple-image-gallery-uploader
          v-if="tabItem.key === 'imageGallery'"
          :items="imagesGallery"
          upload-image-url="/image-gallery"
      />


    </template>

  </base-tab-layout>

</template>

<style scoped>

</style>