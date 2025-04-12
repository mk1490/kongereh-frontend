<template>
  <v-menu
      bottom
      :close-on-content-click="false">
    <template v-slot:activator="{props}">
      <v-avatar
          class="ml-3"
          size="40"
          v-bind="props"
      >
        <v-img
            :src="userProfile"/>
      </v-avatar>
    </template>

    <v-card width="200">
      <v-card-item>
        <div class="d-flex justify-center">
          <v-avatar size="80">
            <v-img :src="userProfile"></v-img>
          </v-avatar>
        </div>
      </v-card-item>
      <v-card-title class="text-center">{{ name }} {{ family ? family : '' }}</v-card-title>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
            to="/profile"
            title="پروفایل" prepend-icon="ri-profile-fill"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary" block @click="handleLogout">
          <v-icon left>mdi-logout</v-icon>
          خروج
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>

</template>

<script setup>
import {ref} from 'vue';
import {useStore} from 'vuex';
import avatar from "@images/avatar.png";

const store = useStore()
const router = useRouter()


const user = computed({
  name: store.getters.name,
  family: store.getters.family,
  username: store.getters.username,
});


const userProfile = computed(() => {
  if (store.getters.avatar) {
    return this.serverAddress + this.avatar;
  }
  return avatar;
})

const handleLogout = async () => {
  await store.dispatch('logout');
  await router.push('/login')
};
</script>