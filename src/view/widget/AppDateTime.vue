<template>
  <span>{{ time }}</span>
</template>

<script>
import {getPersianTime} from '@/plugins/commonMethods/commonMethods'

export default {
  name: "AppDateTime",
  data() {
    return {
      time: null
    }
  },
  created() {
    setInterval(() => {
      this.time = getPersianTime(new Date(), 'dddd DD MMMM YYYY - HH:mm:ss');
    }, 100)
  },
}
</script>

<style scoped>
span {
  font-family: VazirmatnUIFD;
  color: black
}
</style>