<template>
  <v-tooltip bottom>
    <template v-slot:activator="{props}">
      <v-list-item
          active-color="primary"
          v-bind="props"
          :to="to"
          :title="title"
          base-color="primary"
          color="primary"
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