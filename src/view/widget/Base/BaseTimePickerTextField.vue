<script>
import * as moment from "moment-jalaali";

export default {
  name: "BaseTimePickerTextField",
  components: {
    // DatePicker: VuePersianDatetimePicker
  },
  created() {
    // this.id = this.generateCryptoRandomId();
    if (this.value) {
      const date = new Date(this.value);
      this.date = date.getFullYear() + '-' + (this.leftFillNum(date.getMonth() + 1, 2)) + '-' + this.leftFillNum(date.getDate(), 2);
    }
  },
  data() {
    return {
      date: null,
      datePicker: false,
      menu: false,
      id: null,
    }
  },
  props: {
    label: String,
    value: undefined,
    hideTime: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    clearTime() {
      this.date = null;
      this.$emit('input', null);
    },
    submit() {
      this.$refs.menu.save(this.date);
      this.$emit('input', this.date);
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      const format = 'YYYY/MM/DD'
      if (Array.isArray(this.date)) {
        if (this.date.length > 1) {
          return this.date ? `${this.getPersianTime(this.date[0], format)} الی ${this.getPersianTime(this.date[1], format)}` : '';
        }
        return this.date ? `${this.getPersianTime(this.date, format)}` : '';
      }
      return this.date ? this.getPersianTime(this.date, format) : '';
    },
    maxTime() {
      const date = new Date();
      return date.toISOString();
    }
  },
  watch: {
    date: {
      handler(value) {

      }
    }
  }
}
</script>

<template>
  <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto">
    <template v-slot:activator="{ on, attrs }">
      <base-text-field
          :id="'datePicker'"
          :label="label"
          :value="computedDateFormattedMomentjs"
          readonly
          :disabled="disabled"
          :clearable="clearable"
          v-bind="attrs"
          v-on="on"
          @click:clear="clearTime"
          @click="menu.visible = true">

      </base-text-field>
    </template>
    <v-card>
      <date-picker
          v-model="date"
          :custom-input="'datePicker'"
          displayFormat="jYYYY-jMM-jDD HH:mm"
          format="YYYY-MM-DD HH:mm:ss"
          inline auto-submit>
        <template #submit-btn="{ vm, canSubmit, color, submit, lang }">
          <button
              type="button"
              :disabled="!canSubmit"
              :style="{ color }"
              @click="submit"
              v-text="lang.submit"
          />
        </template>
      </date-picker>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            color="primary"
            @click="menu = false"
        >
          لغو
        </v-btn>
        <v-btn
            text
            color="primary"
            @click="submit"
        >
          تأیید
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-menu>
</template>

<style scoped>

</style>
