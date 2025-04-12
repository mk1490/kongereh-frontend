<script setup>

import BaseTabLayout from "@view/widget/Base/BaseTabLayout.vue";
import Users from "@view/components/Settings/Components/Users/Users.vue";
import AccessPermissions from "@view/components/Settings/Components/AccessPermissions/AccessPermissions.vue";

const tabs = ref([
  {title: 'کاربران', key: 'users'},
  {title: 'گروه‌های کاربری', key: 'accessPermissions'},
])
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
    </template>

  </base-tab-layout>

</template>

<style scoped>

</style>