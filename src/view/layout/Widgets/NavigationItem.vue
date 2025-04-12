<template>
  <v-tooltip bottom>
    <template v-slot:activator="{props}">
      <v-list-item
          active-color="white"
          v-bind="props"
          :to="to"
          base-color="white"
          color="white"
          :prepend-icon="icon"
      ></v-list-item>
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
      required: true,
    },
  },
};
</script>