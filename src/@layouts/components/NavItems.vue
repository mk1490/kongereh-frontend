<script lang="ts" setup>
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'


</script>

<template>


  <VerticalNavLink
      :item="{
        title: 'گزارش کار',
        icon: 'ri-article-line',
        to: '/workingReport',
      }"
  />
  <VerticalNavLink
      :item="{
        title: 'کشفیات',
        icon:'ri-slice-fill',
        to: '/discoveries',
      }"
  />
  <VerticalNavLink
      :item="{
        title: 'چک‌لیست تجهیزات',
        icon:'ri-device-line',
        to: '/devicesChecklist',
      }"
  />


  <VerticalNavGroup
      :item="{
      title: 'حضور و غیاب',
      icon: 'ri-time-fill',
    }"
  >

    <VerticalNavLink
        :item="{
        title: 'پرسنل مانیتورینگ',
        icon:'ri-computer-fill',
        to: '/monitoringReportAttendance',
      }"
    />
    <VerticalNavLink
        :item="{
        title: 'شبکه بی‌سیم',
        icon:'ri-router-line',
        to: '/networkAttendance',
      }"
    />

  </VerticalNavGroup>

  <VerticalNavLink
      :item="{
        title: 'پرسنل',
        to: '/personnel',
        icon: 'ri-team-fill',
      }"
  />


  <VerticalNavLink
      :item="{
        title: 'تنظیمات',
        to: '/settings',
        icon: 'ri-settings-3-fill',
      }"
  />

  <VerticalNavGroup
      :item="{
      title: 'گزارش‌گیری',
      // badgeContent: '5',
      // badgeClass: 'bg-error',
      icon: 'ri-file-chart-fill',
    }">


  </VerticalNavGroup>


  <!--  &lt;!&ndash; 👉 Apps & Pages &ndash;&gt;-->
  <!--  <VerticalNavSectionTitle-->
  <!--    :item="{-->
  <!--      heading: 'Apps & Pages',-->
  <!--    }"-->
  <!--  />-->

  <!--  <VerticalNavLink-->
  <!--    :item="{-->
  <!--      title: 'Error',-->
  <!--      icon: 'ri-information-line',-->
  <!--      to: '/no-existence',-->
  <!--    }"-->
  <!--  />-->

  <!--  &lt;!&ndash; 👉 User Interface &ndash;&gt;-->
  <!--  <VerticalNavSectionTitle-->
  <!--    :item="{-->
  <!--      heading: 'User Interface',-->
  <!--    }"-->
  <!--  />-->
  <!--  <VerticalNavLink-->
  <!--    :item="{-->
  <!--      title: 'Typography',-->
  <!--      icon: 'ri-text',-->
  <!--      to: '/typography',-->
  <!--    }"-->
  <!--  />-->
  <!--  <VerticalNavLink-->
  <!--    :item="{-->
  <!--      title: 'Icons',-->
  <!--      icon: 'ri-remixicon-line',-->
  <!--      to: '/icons',-->
  <!--    }"-->
  <!--  />-->
  <!--  <VerticalNavLink-->
  <!--    :item="{-->
  <!--      title: 'Cards',-->
  <!--      icon: 'ri-bar-chart-box-line',-->
  <!--      to: '/cards',-->
  <!--    }"-->
  <!--  />-->

  <!-- 👉 Forms & Tables -->
  <!--  <VerticalNavSectionTitle-->
  <!--    :item="{-->
  <!--      heading: 'Forms & Tables',-->
  <!--    }"-->
  <!--  />-->
  <!-- -->

</template>
