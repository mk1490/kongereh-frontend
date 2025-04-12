<template>
  <v-container
      fluid
      class="d-flex justify-center">
    <v-card width="800">
      <v-card-title style="justify-self: center">
        ویرایش پروفایل

      </v-card-title>
      <v-card-text>
        <div class="v-row">
          <div class="v-col-12 d-flex justify-center">
            <v-avatar size="120">
              <v-img
                  :src="profileImage"
              />
            </v-avatar>

          </div>
          <div class="v-col-12">
            <div class="d-flex justify-center">
              <base-button
                  class="white--text"
                  @click="uploadImageAttachment"
                  :loading="loading"
                  label="بارگذاری تصویر پروفایل"
                  icon="mdi-upload"/>

              <base-button
                  v-if="avatar"
                  label="حذف تصویر پروفایل"
                  @click="deleteImageAttachment"
                  color="error"
                  icon="ri-close-line"
                  class="mx-2"
              />

            </div>
          </div>

          <div class="v-col-12">
            <div class="d-flex justify-center">
              <div class="v-col-8">
                <div class="v-row">
                  <div class="v-col-12">
                    <base-text-field
                        label="نام"
                        v-model="model.name"
                    />
                  </div>
                  <div class="v-col-12">
                    <base-text-field
                        label="نام خانوادگی"
                        v-model="model.family"
                    />
                  </div>
                  <div class="v-col-12">
                    <base-button
                        block
                        @click="changePassword"
                        label="تغییر کلمۀ عبور"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
            variant="elevated"
            color="primary"
            @click="save">
          ذخیره
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-form ref="filePickerForm">
      <input
          ref="filePicker"
          type="file"
          hidden="hidden"
          accept="image/jpeg"
          @change="onFilePicked"
      />
    </v-form>

    <change-password-modal
        v-if="modal.changePassword.visible"
        :visible.sync="modal.changePassword.visible"
        @changePassword="changePasswordSuccess"
    />
  </v-container>
</template>


<script>
import {mapGetters} from "vuex";
import image from '@images/avatar.png'
import ChangePasswordModal from "@/view/components/Profile/ChangePasswordModal.vue";
import {httpDelete, httpPost, httpPut} from "@/plugins/http/httpRequest";

export default {
  name: "Profile",
  components: {ChangePasswordModal},
  computed: {
    ...mapGetters(['name', 'family', 'username', 'avatar']),
    profileImage() {
      return this.avatar ? this.serverAddress + this.avatar : image
    }
  },
  created() {
    this.setModel();
  },
  watch: {
    'name': {
      handler() {
        this.setModel();
      }
    }
  },
  data() {
    return {
      loading: false,
      model: {
        name: null,
        family: null,
        username: null,
      },
      modal: {
        changePassword: {
          visible: false,
        }
      }
    }
  },
  methods: {
    save() {
      httpPut(this.serverAddress + `/api/auth/update-profile`, this.model, result => {
        this.$toast.success('بروزرسانی پروفایل با موفقیت انجام شد.')
        this.$store.commit('SET_USER_INFO', result);
      }, error => {

      })
    },
    uploadImageAttachment() {
      this.$refs.filePicker.click()
    },
    deleteImageAttachment() {
      httpDelete(`${this.serverAddress}/api/auth/delete-profile-photo`, result => {
        this.$store.commit('SET_PHOTO', null)
      })
    },
    onFilePicked(event) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        const formData = new FormData();
        formData.append('image', file);
        this.loading = true;
        httpPost(`${this.serverAddress}/api/auth/upload-profile-photo`, formData, result => {
          this.loading = false;
          this.$refs.filePickerForm.reset();
          this.$store.commit('SET_PHOTO', result.imageUrl + `?d${new Date().toISOString()}`);
        }, error => {
          this.$refs.filePickerForm.reset();
          this.loading = false;
        })
      }
    },
    setModel() {
      this.model.name = this.name || '';
      this.model.family = this.family || '';
      this.model.username = this.username || '';
    },
    changePassword() {
      this.modal.changePassword.visible = true;
    },
    changePasswordSuccess() {
      this.modal.changePassword.visible = false;
    }
  }
}
</script>


<style scoped>

</style>