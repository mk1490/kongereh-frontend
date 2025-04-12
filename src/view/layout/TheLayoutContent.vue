<template>
  <v-main>
    <keep-alive>
      <v-container fluid>
        <router-view/>
      </v-container>

    </keep-alive>
  </v-main>
</template>

<script>
export default {
  name: 'TheLayoutContent',
  data: () => ({}),
};
</script>
