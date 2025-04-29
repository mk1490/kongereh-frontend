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
import BaseButton from "@view/widget/Base/BaseButton.vue";


const props = defineProps({
  visible: Boolean,
  data: Object,
})

const emits = defineEmits(['add', 'update', 'close']);


onMounted(() => {
  if (props.data) {
    model.value.general.id = props.data.id;
    model.value.general.name = props.data.name;
    model.value.general.family = props.data.family;
    model.value.general.fatherName = props.data.fatherName;
    model.value.general.birthDate = props.data.birthDate;
    model.value.general.martyrDate = props.data.martyrDate;
    model.value.bio = props.data.bio;
    model.value.will = props.data.will;
  }
})


const tabs = ref([
  {title: 'عمومی', key: 'general'},
  {title: 'زندگی‌نامه', key: 'biography'},
  {title: 'وصیت‌نامه', key: 'willPaper'},

])


const model = ref({
  general: {},
  will: null,
  bio: null,
})

function submit() {
  let payload = {
    ...model.value.general,
    will: model.value.will,
    bio: model.value.bio,
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
      :visible="props.visible">

    <template #toolbar-action>
      <base-button
          @click="submit"
          label="تأیید"
      />
    </template>

    <base-tab-layout :tabs="tabs">
      <template v-for="(tabItem, tabIndex) in tabs"
                v-slot:[`tab-${tabIndex+1}`]>
        <general
            v-if="tabItem.key === 'general'"
            v-model="model.general"
        />

        <will-paper
            v-if="tabItem.key === 'willPaper'"
            v-model="model.will"/>


        <biography
            v-if="tabItem.key === 'biography'"
            v-model="model.bio"/>

      </template>

    </base-tab-layout>
  </base-modal>
</template>

<style scoped>

</style>