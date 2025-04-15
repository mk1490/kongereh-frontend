<template>
  <v-list
      color="white"
      class="layout-drawer">


    <navigation-item
        title="پشتیبانی"
        icon="ri-customer-service-2-fill"
        to="/support"/>

    <navigation-item
        title="تنظیمات"
        icon="ri-settings-4-fill"
        to="/settings"/>


  </v-list>
</template>

<script>

import NavigationItem from "@/view/layout/Widgets/NavigationItem.vue";

export default {
  name: 'TheLayoutDrawerList',
  components: {NavigationItem},
  props: {
    iconShow: Boolean,
    isNest: Boolean,
    routes: {
      type: Array,
      default: () => {
      },
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    },
    isVisibleItem(item) {
      return this.hasOneVisibleChild(item.children, item)
          && (!this.onlyOneChild.children || this.onlyOneChild.noVisibleChildren)
          && !item.alwaysShow;
    },
    hasOneVisibleChild(children = [], parent) {
      const visibleChildren = children.filter((item) => {
        if (item.hidden) return false;
        // Temp set(will be used if only has one visible child)
        this.onlyOneChild = item;
        return true;
      });

      // When there is only one child router, the child router is displayed by default
      if (visibleChildren.length === 1) {
        // this.onlyOneChild.path = resolve(parent.path, this.onlyOneChild.path);
        // this.onlyOneChild.meta.icon = this.onlyOneChild.meta.icon || parent.meta.icon || '';
        //
        return true;
      }

      // Show parent if there are no child router to display
      if (visibleChildren.length === 0) {
        this.onlyOneChild = {...parent, noVisibleChildren: true};
        return true;
      }

      return false;
    },
    resolvePath(path) {
      if (this.isExternal(path)) {
        return path;
      }
      // return resolve(this.basePath, path);
    },
    getListIcon(item) {
      return item.meta ? item.meta.icon : ' ';
    },
    getListTitle(item) {
      return item.meta ? this.$t(item.meta.title) : '';
    },
  },
};

</script>

<style scoped>
.layout-drawer {
  padding-bottom: 0px;
  padding-top: 0px;
}

.layout-drawer__icon {
  margin-bottom: 8px;
  margin-top: 8px;
}

.v-list-item-active {
  /*background-color: #EF5350 !important;*/
  color: #8effff !important;
}

.v-navigation-drawer .v-list {
  color: orange !important;
}

</style>
