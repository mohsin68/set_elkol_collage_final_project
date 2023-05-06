import api from '../axios';
const state = {
  isAuth: false,
  user: null
};
const getters = {
  isAuth: state => state.isAuth,
  user: state => state.user
};
const mutations = {
  SET_USER (state, payload) {
    state.user = payload;
    state.isAuth = payload ? true : false;
  },

};
const actions = {
  async auth (_, form) {

    let endpoint = '/auth/login';
    try {
      const { data } = await api.post(endpoint, form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.data));
      this.commit('SET_USER', data.data);
      return data;
    }
    catch (error) {
      throw error;
    }

  },
  autoLogin ({ commit }) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      commit('SET_USER', user);
    }
  },
  logout ({ commit }) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    commit('SET_USER', null);
  },


};

export default {
  state,
  getters,
  mutations,
  actions
};
