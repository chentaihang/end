import { createStore } from 'vuex';

const store = createStore({
  state: {
    formData: null,
  },
  mutations: {
    setFormData(state, data) {
      state.formData = data;
    },
  },
  actions: {
    updateFormData({ commit }, data) {
      commit('setFormData', data);
    },
  },
});

export default store;
