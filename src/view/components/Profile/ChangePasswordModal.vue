<script>
import {httpPut} from "@/plugins/http/httpRequest";

export default {
  name: "ChangePasswordModal",
  props: {
    visible: Boolean,
  },
  emits: ['changePassword'],
  data() {
    return {
      model: {
        currentPassword: null,
        newPassword: null,
        submitNewPassword: null,
      },
      passwordVisible: {
        currentPassword: false,
        newPassword: false,
        submitNewPassword: false,
      }
    }
  },
  methods: {
    submit() {
      httpPut(this.serverAddress + `/api/auth/change-password`, this.model, result => {
        this.$emit('changePassword');
        this.$toast.success('تغییر کلمۀ عبور با موفقیت انحام شد')
      })
    }
  }
}
</script>

<template>

  <base-modal
      title="تغییر کلمۀ عبور"
      @close="$emit('update:visible', false)"
      @submit="submit"
      :visible="visible">
    <div class="v-row">
      <div class="v-col-12">
        <base-text-field
            label="کلمۀ عبور فعلی"
            v-model="model.currentPassword"
            :append-icon="passwordVisible.currentPassword? 'mdi-eye-off': 'mdi-eye'"
            @click:append="passwordVisible.currentPassword =!passwordVisible.currentPassword"
            :type="passwordVisible.currentPassword? 'normal': 'password'"
        />
      </div>
      <div class="v-col-12">
        <base-text-field
            label="کلمۀ عبور جدید"
            v-model="model.newPassword"
            :append-icon="passwordVisible.newPassword? 'mdi-eye-off': 'mdi-eye'"
            @click:append="passwordVisible.newPassword =!passwordVisible.newPassword"
            :type="passwordVisible.newPassword? 'normal': 'password'"
        />
      </div>
      <div class="v-col-12">
        <base-text-field
            label="تأیید کلمۀ عبور جدید"
            v-model="model.submitNewPassword"
            :append-icon="passwordVisible.submitNewPassword? 'mdi-eye-off': 'mdi-eye'"
            @click:append="passwordVisible.submitNewPassword =!passwordVisible.submitNewPassword"
            :type="passwordVisible.submitNewPassword? 'normal': 'password'"
        />
      </div>
    </div>
  </base-modal>
</template>

<style scoped>

</style>