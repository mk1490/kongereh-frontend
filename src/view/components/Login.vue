<template>

  <v-app>
    <div class="v-row fill-height align-content-center">
      <div class="v-col-md-3 pa-8" style="align-content: center">
        <div>
          <div class="justify-center text-center text-wrap mb-5 mt-5">
            <div class="d-flex justify-center">
              <v-img
                  height="100"
                  src="/src/assets/images/logo.png"/>
            </div>
            <strong style="font-weight:  bolder">کنگره شهدای خراسان</strong>
          </div>

          <div class="d-block">
            <v-form
                dir="ltr"
                ref="form"
                lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      clearable
                      class="text-center"
                      hide-details="auto"
                      dense
                      maxlength="50"
                      variant="outlined"
                      v-model="model.username"
                      dir="ltr"
                      label="نام کاربری"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      class="text-center"
                      dense
                      maxlength="50"
                      variant="outlined"
                      :type="passwordVisible? 'normal': 'password'"
                      :append-inner-icon="passwordVisible? 'mdi-eye-off': 'mdi-eye'"
                      @click:append-inner="passwordVisible =!passwordVisible"
                      hide-details="auto"
                      dir="ltr"
                      v-model="model.password"
                      label="کلمۀ عبور"
                  />
                </v-col>
              </v-row>
            </v-form>
          </div>

          <div class="d-block my-3">
            <v-btn
                @click="login"
                class="col-12 white--text bg-primary"
                block>
              ورود
            </v-btn>
          </div>
        </div>
      </div>
      <div class="v-col-md pa-0 d-none d-md-block">
        <div class="background">
          <div class="d-inline-block">
            <div class="d-flex align-center justify-center mb-12">
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import logo from '@/assets/images/logo.png'
import {httpPost, serverAddress} from "@/plugins/http/httpRequest";
import BaseTextField from "@view/widget/Base/BaseTextField.vue";

export default {
  name: 'Login',
  components: {BaseTextField},
  computed: {
    cardWidth: function () {
      switch (this.$vuetify.display.name) {
        case 'xs':
          return 300
        default:
          return 500;
      }
    }
  },
  data() {
    return {
      passwordVisible: false,
      model: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      httpPost(serverAddress + `/api/auth/login`, this.model, (result) => {
        localStorage.setItem('Authorization', result.access_token);
        this.$router.push({path: '/'}).then();
      })
    },
    backToHomePage() {
      this.$router.push({
        name: 'Home'
      })
    },

  }
}
</script>

<style scoped>
span {
  font-family: VazirmatnUIFD;
  font-size: 1.3rem;;
}

.background {
  z-index: -1 !important;
  height: 100vh;
  width: 100%;
  filter: blur(0px) brightness(0.4);
  background-image: url('@images/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 1/-1;
  grid-row: 1/-1;
}

.customer-bg {
  background-image: url(@images/bg.jpg);
  background-position: center;
  background-size: cover;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

strong {
  font-family: VazirmatnUIFD, serif;
}
</style>
