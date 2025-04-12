<script>
import avatar from '@images/avatar.png'

export default {
  name: 'Personnel',
  props: {
    image: String,
    fullName: String,
    isSpecial: Boolean,
  },
  computed: {
    finalImage() {
      if (this.image) {
        return this.serverAddress + this.image + '?' + Date.now().toString();
      } else {
        return avatar;
      }
    }
  }
}
</script>

<template>

  <div class="d-flex py-2 align-center">
    <v-avatar
        :style="{'display': isSpecial ? 'contents !important': 'flex !important'}"
        size="60"
    >

      <v-img
          :src="finalImage"
      />
      <v-badge
          v-if="isSpecial"
          class="transparent"
          color="transparent"
          top
          overlap
          offset-x="65"
          offset-y="-5">
        <template v-slot:badge>
          <v-icon
              color="red"
              size="32"
          >
            ri-star-fill
          </v-icon>
        </template>
      </v-badge>

    </v-avatar>


    <strong class="mr-2 align-center">
      {{ fullName }}
    </strong>

  </div>

</template>

<style scoped>
</style>