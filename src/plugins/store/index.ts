import {createStore} from 'vuex';
import baseData from './modules/baseData.js';
import user from './modules/user';

import user from './modules/user';
import type {App} from "vue";

const store = createStore({
    modules: {
        user,
        baseData,
    },
    plugins: [],
    state: {},
    mutations: {},
    actions: {},
    getters: {},
});
export {store}
export default function (app: App) {
    app.use(store)
}