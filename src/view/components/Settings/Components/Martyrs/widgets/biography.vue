<script setup>

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';


const model = ref(null);

const editor = ref(ClassicEditor);

const config = computed(() => {
  if (!cloud.data.value) {
    return null;
  }

  return {
    toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter']
  };
});
</script>

<template>
  <ckeditor
      v-model="model"
      :editor="editor"
      :config="config"
  />
</template>

<style scoped>

</style>