const settings = {
  state: {
    id: null,
    navbar: {
      show: false,
    }
  },
  getters: {
    locale: (state) => state.locale,
    toolbarDense: (state) => state.dense,
    navbarDense: (state) => state.navbar.dense,
    navbarShow: (state) => state.navbar.show,
    footerShow: (state) => state.footer,
  },

  mutations: {
    SET_SETTINGS: (state, payload) => {
      state.locale = payload.locale || state.locale;
      state.dense = typeof payload.dense === 'boolean' ? payload.dense : state.dense;
      state.footer = typeof payload.dense === 'boolean' ? payload.footer : state.footer;
      state.navbar = payload.navbar || state.navbar;
      state.fullscreen = payload.fullscreen || state.fullscreen;
      state.settingsPanel = payload.settingsPanel || state.settingsPanel;
      // apply settings to plugins
    },
    TOOLBAR_DENSE_TOGGLE: (state) => {
      state.dense = !state.dense;
    },
    NAVBAR_DENSE_TOGGLE: (state) => {
      state.navbar.dense = !state.navbar.dense;
    },
    NAVBAR_LOGO_TOGGLE: (state) => {
      state.navbar.logo = !state.navbar.logo;
    },
    NAVBAR_TOGGLE: (state) => {
      state.navbar.show = !state.navbar.show;
    },
    NAVBAR_STATE: (state, payload) => {
      state.navbar.show = payload.state;
    },
    FULLSCREEN_TOGGLE: (state, payload) => {
      state.fullscreen.show = payload.state;
    },
    FULLSCREEN_BTN: (state, payload) => {
      state.fullscreen.btn = payload.state;
    },
    SETTINGS_PANEL_BTN_TOGGLE: (state) => {
      state.settingsPanel.btn = !state.settingsPanel.btn;
    },
    SETTINGS_PANEL_TOGGLE: (state) => {
      state.settingsPanel.show = !state.settingsPanel.show;
    },
    SETTINGS_PANEL_STATE: (state, payload) => {
      state.settingsPanel.show = payload.state;
    },
    FOOTER_TOGGLE: (state) => {
      state.footer = !state.footer;
    },
  },
  actions: {
    SetLocale: async (context, payload) => {
      context.commit('SET_LOCALE', payload);
      await setLocale(payload.locale);
    },
    ToolbarDenseToggle: async (context) => {
      context.commit('TOOLBAR_DENSE_TOGGLE');
    },
    NavbarDenseToggle: async (context) => {
      context.commit('NAVBAR_DENSE_TOGGLE');
    },
    NavbarLogoToggle: async (context, payload) => {
      context.commit('NAVBAR_LOGO_TOGGLE', payload);
    },
    NavbarToggle: async (context, payload) => {
      context.commit('NAVBAR_TOGGLE', payload);
    },
    NavbarState: async (context, payload) => {
      context.commit('NAVBAR_STATE', payload);
    },
    FullscreenToggle: async (context, payload) => {
      context.commit('FULLSCREEN_TOGGLE', payload);
    },
    FullscreenBtn: async (context, payload) => {
      context.commit('FULLSCREEN_BTN', payload);
    },
    SettingsPanelBtnToggle: async (context, payload) => {
      context.commit('SETTINGS_PANEL_BTN_TOGGLE', payload);
    },
    SettingsPanelToggle: async (context, payload) => {
      context.commit('SETTINGS_PANEL_TOGGLE', payload);
    },
    SettingsPanelState: async (context, payload) => {
      context.commit('SETTINGS_PANEL_STATE', payload);
    },
    SettingsPanelDefault: async (context) => {
      context.commit('SET_SETTINGS', getDefaultSettings());
    },
    FooterToggle: async (context) => {
      context.commit('FOOTER_TOGGLE');
    },
  },
};

export default settings;
