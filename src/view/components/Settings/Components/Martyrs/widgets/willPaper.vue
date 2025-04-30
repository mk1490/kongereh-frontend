<script setup>


import BaseTextArea from "@view/widget/Base/BaseTextArea.vue";

const model = ref(null);
const props = defineProps({
  modelValue: String,
})

const emits = defineEmits(['update:modelValue'])


onMounted(() => {
  setModel();
})


watch(props.modelValue, () => {
  setModel();
})

watch(() => model.value, () => {
  emits('update:modelValue', model)
})


function setModel() {
  model.value = props.modelValue;
}
</script>

<template>
  <base-text-area
      v-model="model"
      label="متن"
  />
</template>

<style scoped>

</style>