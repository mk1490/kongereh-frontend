const user = {
    state: {
        id: null,
        name: '',
        family: '',
        username: '',
        avatar: '',
        phoneNumber: '',
        nationalCode: '',
        personnelCode: '',
        userType: '',
        roles: [],
        submitDelete: -1,
        loading: false,
        isLogin: false,
        userInfo: {},
        userPermissions: [],
        dashboardCounter: {
            cooperationInbox: 0,
            supportTicket: 0,
            invoices: 0,
        }
    }, getters: {
        id: (state) => state.id,
        name: (state) => state.name,
        family: (state) => state.family,
        username: (state) => state.username,
        nationalCode: (state) => state.nationalCode,
        email: (state) => state.email,
        phoneNumber: (state) => state.phoneNumber,
        personnelCode: (state) => state.personnelCode,
        roles: (state) => state.roles,
        avatar: (state) => state.avatar,
        status: (state) => state.status,
        loading: (state) => state.loading,
        loginState: (state) => state.loginState,
        isLogin: (state) => state.isLogin,
        userInfo: (state) => state.userInfo,
        userPermissions: (state) => state.userPermissions,
        dashboardCounter: (state) => state.dashboardCounter,
        isAuthor: (state) => state.userType == 'authorPanels',
        isAdmin: (state) => state.userType == 'admin',
    }, mutations: {
        SET_USER_INFO: (state, payload) => {
            state.name = payload.name;
            state.family = payload.family;
            state.nationalCode = payload.nationalCode;
            state.email = payload.email;
            state.avatar = payload.imageUrl;
            if (!!payload.events) {
                state.dashboardCounter.cooperationInbox = payload.events.cooperationRequests;
                state.dashboardCounter.invoices = payload.events.invoices;
            }
            state.userPermissions = payload.roles;
        }, SET_PHOTO: (state, payload) => {
            state.avatar = payload;
        }, SET_TOKEN: (state, token) => {
            state.token = token;
        }, SHOW_LOADING: (state, showLoading) => {
            state.loading = showLoading;
        }, ALL_PREFERENCES: (state, payload) => {
            state.allPreferences = payload;
        }, DELETE_DIALOG: (state, {index, visible}) => {
            state.deleteDialog.index = index;
            state.deleteDialog.visible = visible;
        }, SUBMIT_DELETE: (state, index) => {
            state.submitDelete = index;
        }, LOGOUT: () => {
        }, REMOVE_PHOTO: (state) => {
            state.avatar = '';
        }, LOGIN_STATE: (state, payload) => {
            state.isLogin = !!payload;
        },
    }, actions: {
        showLoading: ({commit}) => {
            commit('SHOW_LOADING', true);
        }, hideLoading: ({commit}) => {
            commit('SHOW_LOADING', false);
        }, allPreferences: async ({commit}, payload) => {
            await commit('ALL_PREFERENCES', payload);
        }, deleteDialog: async ({commit}, index) => {
            await commit('DELETE_DIALOG', {
                index: index, visible: true,
            });
        }, submitDelete: async ({commit}, index) => {
            await commit('SUBMIT_DELETE', index);
        }, logout: async ({commit}) => {
            await commit('LOGOUT');
            await commit('LOGIN_STATE', false)
            localStorage.setItem('Authorization', null);
        }, /*initProfile: async ({commit}) => {
            let isAuthenticated = localStorage.getItem('Authorization');
            isAuthenticated = !!isAuthenticated;
            if (isAuthenticated == false)
                return;
            // const [err, data] = await Vue.prototype.to(Vue.prototype.http.get(`${Vue.prototype.serverAddress}/auth/currentProfile`));
            // if (!err) {
            //     if (data.avatar) {
            //         data.avatar = Vue.prototype.serverAddress + data.avatar;
            //     }
            //     await commit('SET_USER_INFO', data);
            // }
        // },*/
        setUserInfo: async ({commit}, payload) => {
            await commit('SET_USER_INFO', payload);
        }, setPhoto: async ({commit}, payload) => {
            await commit('SET_PHOTO', payload);
        }, removePhoto: async ({commit}) => {
            await commit('REMOVE_PHOTO');
        }, isAuth: async () => {
            return !!localStorage.getItem('Authorization');
        }
    }
}
export default user;
