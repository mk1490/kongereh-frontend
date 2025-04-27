<script setup>

import BaseCardLayout from "@view/widget/Base/BaseCardLayout.vue";
import BaseTabLayout from "@view/widget/Base/BaseTabLayout.vue";
import CmsCategory from "@view/components/Cms/widgets/cmsCategory.vue";


const tabs = ref([
  {title: 'دسته‌بندی', key: 'category'},
])
</script>

<template>
  <base-card-layout title="مدیریت محتوا">
    <base-tab-layout :tabs="tabs">
      <template v-for="(tabItem, tabIndex) in tabs"
                v-slot:[`tab-${tabIndex+1}`]="{item}">


        <cms-category
            v-if="tabItem.key === 'category'"
        />


      </template>
    </base-tab-layout>
  </base-card-layout>
</template>

<style scoped>

</style>