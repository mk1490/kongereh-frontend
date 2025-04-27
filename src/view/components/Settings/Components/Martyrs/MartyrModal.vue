<script setup>

import BaseModal from "@view/widget/Base/BaseModal.vue";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import {httpPost, httpPut} from "@/plugins/http/httpRequest";
import BaseDateTimeTextField from "@view/widget/Base/BaseDateTimeTextField.vue";
import BaseTabLayout from "@view/widget/Base/BaseTabLayout.vue";
import General from "@view/components/Settings/Components/Martyrs/widgets/general.vue";
import WillPaper from "@view/components/Settings/Components/Martyrs/widgets/willPaper.vue";
import Martyrs from "@view/components/Settings/Components/Martyrs/Martyrs.vue";
import Biography from "@view/components/Settings/Components/Martyrs/widgets/biography.vue";


const props = defineProps({
  visible: Boolean,
  data: Object,
})

const emits = defineEmits(['add', 'update', 'close']);


onMounted(() => {

})


const tabs = ref([
  {title: 'عمومی', key: 'general'},
  {title: 'زندگی‌نامه', key: 'willPaper'},
  {title: 'زندگی‌نامه', key: 'biography'},

])


function submit() {
  let payload = {
    ...model.value,
  }


  if (props.data) {
    httpPut(`/martyr/${props.data.id}`, payload, result => {
      emits('update', result);
    }, error => {

    })

  } else {
    httpPost(`/martyr`, payload, result => {
      emits('add', result);
    }, error => {

    })
  }
}


</script>

<template>
  <base-modal
      :title="props.data? 'ویرایش آیتم': 'تعریف آیتم جدید'"
      @close="emits('close')"
      full-screen
      @submit="submit"
      :visible="props.visible">
    <base-tab-layout :tabs="tabs">

      <template v-for="(tabItem, tabIndex) in tabs"
                v-slot:[`tab-${tabIndex+1}`]>

        <general
            v-if="tabItem.key === 'general'"
        />


        <will-paper
            v-if="tabItem.key === 'willPaper'"/>


        <biography
            v-if="tabItem.key === 'biography'"/>

      </template>

    </base-tab-layout>
  </base-modal>
</template>

<style scoped>

</style>