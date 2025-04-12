<template>
  <base-modal
      hide-submit-button
      @close="$emit('close')"
      :visible="visible">
    <div class="v-row">
      <div class="v-col-12">
        <div class="d-flex justify-center">
          <v-avatar
              color="primary"
              size="400">
            <div style="position: relative">
              <video
                  ref="video"
                  :style="{position: takedPhoto ?  'absolute': 'relative'}"
                  style="object-fit: cover;"
                  autoplay="true">
              </video>
              <v-img
                  v-if="takedPhoto"
                  :src="base64Image"
                  :height="$refs.video ? $refs.video.clientHeight : 0"
                  :width="$refs.video ? $refs.video.clientWidth : 0"
              />
            </div>
          </v-avatar>
        </div>
      </div>
      <div
          class="v-col">
        <v-btn
            block
            color="primary"
            :color="takedPhoto ? 'error': 'primary'"
            @click="takePhotoOrReleaseCamera">
          <div v-if="!takedPhoto">
            گرفتن عکس
          </div>
          <div
              v-else>
            حذف و بارگذاری مجدد دوربین
          </div>
        </v-btn>
      </div>
      <div
          v-if="takedPhoto"
          class="col">
        <v-btn
            block
            color="primary"
            @click="uploadOrSubmitPhoto">
          {{ upload ? 'بارگذاری' : 'تأیید' }}
        </v-btn>
      </div>
    </div>
  </base-modal>
</template>

<script>
import {httpPost} from "@/plugins/http/httpRequest";

export default {
  name: "WebcamImagePicker",
  emits: ['onUploadSuccess', 'onImagePicked', 'close'],
  async mounted() {
    this.video = this.$refs.video;
    this.startCamera();
  },
  props: {
    visible: Boolean,
    data: Object,
    uploadUrl: String,
    upload: Boolean,
  },
  data() {
    return {
      takedPhoto: false,
      base64Image: null,
      videoSrc: null,
      video: null,
      canvas: null,
      stream: null,
    }
  },
  methods: {
    async takePhotoOrReleaseCamera() {
      if (!this.takedPhoto) {
        const height = this.$refs.video.clientHeight;
        const width = this.$refs.video.clientWidth;
        this.canvas = document.createElement('canvas')
        this.canvas.height = height;
        this.canvas.width = width;
        this.canvas.getContext('2d').drawImage(this.video, 0, 0, width, height)
        const fileReader = new FileReader();
        this.canvas.toBlob(blob => {
          fileReader.readAsDataURL(blob);
          fileReader.onloadend = () => {
            this.base64Image = fileReader.result;
            this.takedPhoto = true;
          }
        })

      } else {
        this.takedPhoto = false;
        this.startCamera();
      }
    },
    uploadOrSubmitPhoto() {
      this.canvas.toBlob((blob) => {
        let file = new File([blob], 'file.png', {type: "image/jpeg"})
        if (this.upload === true) {
          const formData = new FormData();
          formData.append('image', file);
          httpPost(`${this.uploadUrl || `/driver/upload-personnel-photo/${this.data.id}`}`, formData, result => {
            this.$emit('onUploadSuccess', {
              imageUrl: result.imageUrl + `?t=${new Date().getTime()}`,
              item: this.data,
            })
          })
        } else {
          this.$emit('onImagePicked', {
            file: file,
            base64: this.base64Image,
          });
        }
      }, 'image/jpeg');


    },
    startCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true,
      }).then(stream => {
        this.stream = stream;
        this.video.srcObject = stream;
      }).catch(e => {

      })
    }
  },
  beforeDestroy() {
    this.stream.getTracks().forEach((track) => {
      track.stop();
    })
  }
}
</script>

<style scoped>

videoElement, canvas {
  width: 500px;
  height: 375px;
  background-color: #666;
}
</style>