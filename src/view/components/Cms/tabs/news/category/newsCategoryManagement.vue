<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseTable from "@view/widget/Base/BaseTable.vue";
import NewsCategoryModal from "@view/components/Cms/tabs/news/category/newsCategoryModal.vue";
import BaseButton from "@view/widget/Base/BaseButton.vue";

const props = defineProps({
  visible: Boolean,
  data: Array,
})


const emits = defineEmits(['close'])


const table = ref({
  headers: [
    {title: 'عنوان', value: 'title'},
  ],
  contents: [],
  actions: [],
})

const modal = ref({
  visible: false,
  data: null,
})

onMounted(() => {
  table.value.contents = props.data;
})

function addItem(data) {
  table.value.contents.push(data);
  modal.value.visible = false;
}


function updateItem(data) {
  table.value.contents.push(data);
  modal.value.visible = false;
}


function define() {
  modal.value.visible = true;
}


</script>

<template>
  <base-modal
      title="دسته‌بندی اخبار"
      @close="emits('close')"
      :visible="props.visible"
      full-screen>

    <template #toolbar-action>
      <base-button
          label="تعریف دسته جدید"
          @click="define"
      />
    </template>

    <base-table
        :headers="table.headers"
        :items="table.contents"
        :actions="table.actions"
    />

  </base-modal>

  <news-category-modal
      v-if="modal.visible"
      :visible="modal.visible"
      :data="modal.data"
      @close="modal.visible = false"
      @add="addItem"
      @update="updateItem"
  />

</template>

<style scoped>

</style>