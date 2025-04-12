<script setup lang="ts">
const _props = defineProps({
  label: String,
  icon: String,
  text: Boolean,
  small: Boolean,
  variant: String,
  skipFocus: Boolean,
  buttonIsIcon: Boolean,
  disabled: Boolean,
  width: Number,
  color: {
    default: 'primary',
    type: String,
  },
  block: {
    default: false,
    type: Boolean,
  },
  menuItems: Array,
})
</script>

<template>
  <v-menu
      v-if="menuItems && menuItems.length > 0"
      top>
    <template v-slot:activator="{ props }">
      <v-btn
          v-bind="props"
          :icon="_props.buttonIsIcon"
          :text="_props.text"
          :small="_props.small"
          :block="_props.block"
          :color="_props.color">
        <v-icon>
          ri-arrow-down-s-line
        </v-icon>
        <span class="ms-2">
        {{ label }}
        </span>

        <slot>
        </slot>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
          v-for="item in _props.menuItems"
          @click="item['click'](item)">
        <v-list-item-title>
          {{ item['title'] }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <v-btn
      v-if="!_props.menuItems"
      :block="_props.block"
      :text="_props.text"
      :width="width"
      :small="_props.small"
      :disabled="disabled"
      :variant="_props.variant"
      v-bind="$attrs"
      class="white--text"
      :tabindex="skipFocus ? '-1' : '0'"
      :color="_props.color">
    <v-icon v-if="_props.icon">
      {{ _props.icon }}
    </v-icon>
    <div v-if="!buttonIsIcon">
      <span class="ms-2">{{ label }}</span>
    </div>
    <slot>
    </slot>
  </v-btn>
</template>

<style scoped>

</style>
