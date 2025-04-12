<template>
  <div>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        max-width="290">
      <template v-slot:activator="{props}">
        <base-text-field
            :model-value="computedDateFormattedMomentjs"
            clearable
            label="انتخاب تاریخ"
            readonly
            v-bind="props"
            @click:clear="date = null"/>
      </template>
      <v-card width="400">
        <v-card-text style="justify-items: center">
          <v-date-picker
              ref="datePicker"
              v-model="date"
              @change="datePicker = false;menu = false"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <base-button
              @click="submit"
              label="تأیید"
          />
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>

</template>

<script>
import moment from "moment-jalaali";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";
import BaseButton from "@view/widget/Base/BaseButton.vue";

export default {
  name: "DatePickerInputTextField",
  components: {BaseButton, BaseTextField},
  data() {
    return {
      date: null,
      datePicker: false,
      menu: false,
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('jYYYY/jM/jD');
    },
    submit() {
      this.menu = false;
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      // return this.date ? `${this.formatDate(this.date[0])} الی ${this.formatDate(this.date[1])}` : ''
      return this.date ? this.formatDate(this.date[0]) : ''
    },
  },
  watch: {
    'date': {
      handler() {
        this.$emit('input', this.date);
      }
    }
  }
}
</script>

<style scoped>

</style>
