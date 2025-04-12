<script lang="ts" setup>

// Components
import logo from '@images/elecstar-logo.png'
import NavItems from "@layouts/components/NavItems.vue";
import {VerticalNavLayout} from "@layouts";
import NavbarThemeSwitcher from "@layouts/components/NavbarThemeSwitcher.vue";
import UserProfile from "@layouts/components/UserProfile.vue";
import {httpGet} from '@/plugins/http/httpRequest'
import {Icon} from "@iconify/vue";
import {useStore} from 'vuex'

const store = useStore()

onMounted(() => {
  httpGet(`/auth/initialize`, result => {
    // baseDataStore.setRoles(result.roles)
    // baseDataStore.setUserFullName(result.name + ' ' + result.family)
  })
})

function toggleVerticalOverlayNavActive() {
  store.dispatch('toggleNavbar').then()
}
</script>

<template>
  <vertical-nav-layout>
    <!-- 👉 navbar -->
    <template #navbar="{  }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->


        <!-- 👉 Search -->
        <!--        <div-->
        <!--          class="d-flex align-center cursor-pointer"-->
        <!--          style="user-select: none;"-->
        <!--        >-->
        <!--          &lt;!&ndash; 👉 Search Trigger button &ndash;&gt;-->
        <!--          <IconBtn>-->
        <!--            <VIcon icon="ri-search-line" />-->
        <!--          </IconBtn>-->

        <!--          <span class="d-none d-md-flex align-center text-disabled">-->
        <!--            <span class="me-3">Search</span>-->
        <!--            <span class="meta-key">&#8984;K</span>-->
        <!--          </span>-->
        <!--        </div>-->

        <VSpacer/>
        <v-btn
            icon
            class="ms-n3 d-lg-none"
            @click="toggleVerticalOverlayNavActive(true)"
        >
          <Icon icon="ri-menu-line"/>
        </v-btn>

        <!--        <IconBtn>-->
        <!--          <VIcon icon="ri-notification-line" />-->
        <!--        </IconBtn>-->

        <navbar-theme-switcher class="me-2"/>

        <user-profile/>
      </div>
    </template>

<!--    <template #vertical-nav-header="{ toggleIsOverlayNavActive }">-->
    <!--      <RouterLink-->
    <!--          to="/"-->
    <!--          class="app-logo app-title-wrapper"-->
    <!--      >-->
    <!--        <VImg-->
    <!--            width="200"-->
    <!--            :src="logo"/>-->
    <!--      </RouterLink>-->

    <!--      &lt;!&ndash;      <IconBtn&ndash;&gt;-->
    <!--      &lt;!&ndash;        class="d-block d-lg-none"&ndash;&gt;-->
    <!--      &lt;!&ndash;        @click="toggleIsOverlayNavActive(false)"&ndash;&gt;-->
    <!--      &lt;!&ndash;      >&ndash;&gt;-->
    <!--      &lt;!&ndash;        <VIcon icon="ri-close-line" />&ndash;&gt;-->
    <!--      &lt;!&ndash;      </IconBtn>&ndash;&gt;-->
    <!--    </template>-->

    <template #vertical-nav-content>
      <nav-items/>
    </template>

    <!-- 👉 Pages -->
    <slot/>

    <!--    &lt;!&ndash; 👉 Footer &ndash;&gt;-->
    <!--    <template #footer>-->
    <!--      <Footer/>-->
    <!--    </template>-->
  </vertical-nav-layout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}

.app-logo {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  .app-logo-title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
    text-transform: uppercase;
  }
}
</style>
