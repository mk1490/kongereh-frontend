<template>
  <div class="d-inline-flex">
    <v-card
        v-for="(imageItem, imageIndex) in imageItems"
        ref="uploadArea"
        class="upload-area"
        @mouseenter="hoverIndex = imageIndex"
        @mouseleave="hoverIndex = -1"
        @click="imageItem.imageUrl? triggerFileInput: undefined">
      <img v-if="imageItem.imageUrl" :src="imageItem.imageUrl" class="thumbnail" alt=""/>

      <v-overlay
          :model-value="hoverIndex === imageIndex"
          persistent
          class="align-center justify-center"
          scrim="#036358"
          contained
      >
        <base-button
            @click="deleteImage(imageIndex)"
            label="حذف"
        />
      </v-overlay>
    </v-card>
    <div
        ref="uploadArea"
        class="upload-area"
        @click="triggerFileInput"
    >
      <input
          ref="fileInput"
          type="file"
          accept="image/*"
          class="hidden-file-input"
          @change="handleFileChange"
      >
      <img v-if="imageUrl" :src="imageUrl" class="thumbnail"/>
      <div v-else class="plus-icon">+</div>
    </div>
  </div>


</template>

<script setup>
import {ref} from 'vue';
import BaseButton from "@view/widget/Base/BaseButton.vue";
import {httpPost, serverAddress} from "@/plugins/http/httpRequest";

const uploadArea = ref(null);
const fileInput = ref(null);
const imageItems = ref([]);
const hoverIndex = ref(-1)


const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  uploadImageUrl: String
})

onMounted(() => {
  props.items.map(f => {
    imageItems.value.push({
      imageUrl: serverAddress + f.imageUrl,
    })
  })

})
const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const formData = new FormData();
  const file = event.target.files[0];
  if (file) {
    formData.append('image', file);
    const reader = new FileReader();
    reader.onload = (e) => {
      httpPost(props.uploadImageUrl, formData, result => {
        imageItems.value.push({
          imageUrl: e.target.result,
        });
      }, error => {

      })
    };
    reader.readAsDataURL(file);
  } else {
  }
};


function deleteImage(index) {
  imageItems.value.splice(index, 1);
}

</script>

<style scoped>
.upload-area {
  width: 150px;
  height: 150px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  margin-inline: 0.25em;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
}

.plus-icon {
  font-size: 2rem;
  color: #555;
}

.hidden-file-input {
  display: none;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover; /* برای اینکه تصویر کل فضا رو بگیره و برش بخوره اگر نسبت ابعادش فرق داشت */
}
</style>