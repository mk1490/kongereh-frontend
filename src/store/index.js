import Vuex from 'vuex';
import syncStorage from './plugins/syncStorage';
import permission from '../plugins/store/modules/permission';
import settings from '../plugins/store/modules/settings';
import baseData from '../plugins/store/modules/baseData';

import user from '../plugins/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        permission,
        settings,
        user,
        baseData
    },

    plugins: [
        syncStorage({}),
    ],
    state: {},
    mutations: {},
    actions: {},
    getters: {},
});
