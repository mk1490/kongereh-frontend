<script>
export default {
  name: "DifferentTimeCalculatorWidget",
  props: {
    referenceTime: String,
    maximumAttendanceTime: Number,
  },
  data() {
    return {
      textContent: null,
      _referenceTime: null,
      textClass: '',
    }
  },
  mounted() {
    this._referenceTime = new Date(this.referenceTime);
    setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  destroyed() {
    clearInterval(this.updateTime())
  },
  methods: {
    updateTime() {
      const now = new Date();
      const timeDifferenceMs = now - this._referenceTime;
      const differenceHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
      const differenceMinutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
      const differenceSeconds = Math.floor((timeDifferenceMs % (1000 * 60)) / 1000);
      if (this.maximumAttendanceTime) {
        this.textClass = (timeDifferenceMs / (1000 * 60)) >= this.maximumAttendanceTime ? 'red--text' : '';
      }

      this.textContent = `${differenceHours.toString().padStart(2, '0')}:${differenceMinutes.toString().padStart(2, '0')}:${differenceSeconds.toString().padStart(2, '0')}`
    }
  },
}
</script>

<template>
  <strong :class="textClass">
    {{ textContent }}
  </strong>
</template>

<style scoped>

</style>
