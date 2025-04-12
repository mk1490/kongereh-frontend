<template>
  <v-navigation-drawer
      fixed
      :model-value="true"
      class="darken-4 navbar-background"
      app
      right
      width="230"
      :mini-variant="true"
      @input="stateNavbarShow">

    <the-layout-drawer-list
        v-if="drawerItemsVisible"
        :routes="navigationItems"
        :icon-show="true"
    />
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex';
import TheLayoutDrawerList from './TheLayoutDrawerList.vue';

export default {
  name: 'TheLayoutDrawer',
  components: {
    TheLayoutDrawerList,
  },
  async created() {
    this.refreshRoutes();
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'SET_USER_INFO') {
        this.permissions = mutation.payload.roles;
        this.refreshRoutes()
      }
    });
    if (this.permissions.length === 0) {
      // await this.$store.dispatch('initProfile');
    }
  },
  data() {
    return {
      drawerItemsVisible: false,
      permissions: [],
      routes: [],
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'navbarShow',
      'toolbarDense',
      'avatar',
      'roles'
    ]),
    navigationItems() {
      this.routes = this.routes.map((f) => {
        f.hasPermission = this.checkHasPermission(f);
        if (f.children) {
          f.children = f.children.map((f) => {
            f.hasPermission = this.checkHasPermission(f);
            return f;
          })
        }
        return f;
      });
      return this.routes;
    }
  },
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('NavbarState', {state});
    },
    checkHasPermission(item) {
      if (typeof item.meta === 'object') {
        if (item.meta.permission) {
          const trueItems = []
          item.meta.permission.split(',').forEach(x => {
            if (this.roles.includes(x) == true) {
              trueItems.push(1);
            }
          })
          return trueItems.length < 1;
          // return false;
        } else
          return false;
      }
      return false;
    },
    refreshRoutes() {
      this.drawerItemsVisible = false;
      this.routes = this.$router.options.routes;
      setTimeout(() => {
        if (this.routes.length > 0) {
          this.drawerItemsVisible = true;
        }
      }, 10);
    }
  },
};
</script>
