<script setup>


import BaseTextArea from "@view/widget/Base/BaseTextArea.vue";

const model = ref(null);
const props = defineProps({
  modelValue: String,
})

defineEmits(['update:modelValue'])

onMounted(() => {
  setModel();
})


watch(props.modelValue, () => {
  setModel();
})

function setModel() {
  model.value = props.modelValue;
}
</script>

<template>
  <base-text-area
      v-model="model"
      @update:modelValue="$emit('update:modelValue', $event)"
      label="متن"
  />
</template>

<style scoped>

</style>