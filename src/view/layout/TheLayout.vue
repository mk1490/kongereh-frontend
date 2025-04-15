<template>
  <v-layout>


    <the-layout-toolbar/>
    <the-layout-drawer/>
    <the-layout-content/>
    <audio
        style="visibility: hidden;display: none"
        controls
        autoplay
        muted
        id="audio"/>
  </v-layout>
</template>

<script>
import TheLayoutDrawer from './TheLayoutDrawer.vue';
import TheLayoutToolbar from './TheLayoutToolbar.vue';
import TheLayoutContent from './TheLayoutContent.vue';
import TheLayoutFooter from './TheLayoutFooter.vue';
import {serverAddress, httpGet} from "@/plugins/http/httpRequest";

export default {
  async created() {
    Notification.requestPermission().then()
    // const socketIO = new io(Vue.prototype.serverAddress, {
    //   path: "/api/events",
    //   query: {
    //     'Authorization': sessionStorage.getItem('Authorization')
    //   }
    // })
    this.$store.subscribeAction(({type}) => {
      if (type === 'stopSound') {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.$store.commit('SET_SOUND_PLAY_STATE', false)
      }
    })

    // socketIO.connect();
    // socketIO.on('connection', () => {
    // })
    // Vue.prototype.socketIO = socketIO;
    /*socketIO.on('notification', (data) => {
      if (!!data.soundNotification) {
        this.$store.commit('SET_SOUND_PLAY_STATE', true)
        const source = this.serverAddress + data.soundAlarm;
        this.audio = document.getElementById('audio');
        this.audio.src = source;
        this.audio.muted = false;
        this.audio.play().then(() => {
        }).catch((e) => {
          console.error(e)
        })
        this.audio.onended = () => {
          this.$store.commit('SET_SOUND_PLAY_STATE', false);
        }
      }
      if (!!data.browserNotification) {
        const notificationData = data.browserNotification;
        Notification.requestPermission().then((result) => {
          new Notification(notificationData.title, {
            body: notificationData.content,
            image: this.baseUrl + notificationData.image,
            dir: "rtl",
          })
        });
      }
    });*/

    httpGet(serverAddress + `/api/auth/initialize`, data => {
      this.$store.commit('SET_USER_INFO', data);
      if (['null', null, 'Root'].includes(this.$route.name)) {
        if (this.$store.getters.roles.includes('dashboard.main')) {
          this.$router.push({
            name: 'Dashboard'
          }).then();
        }
      }
    }, error => {
      console.log(error)
      // localStorage.removeItem('Authorization')
    });
  },
  name: 'TheLayout',
  components: {
    TheLayoutDrawer,
    TheLayoutToolbar,
    TheLayoutContent,
    TheLayoutFooter,
  },
  data: () => ({
    audio: null,
  }),
};
</script>
