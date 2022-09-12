import { createStore } from 'vuex'

export default createStore({
  state: ()=>( {
    cities: [
      {
        id: 1,
        name: "Москва"
      },
      {
        id: 2,
        name: "Санкт-Петербург"
      },
      {
        id: 3,
        name: "Казань"
      }
    ],
    adressServer: "http://hh.autodrive-agency.ru/test-tasks/front/task-7/",
    placeHolders: ["Иван Иванов", "+7 (___) ___-__-__", "you@example.com"],
    dataToSend: {name: '', phone: '', email: '', city_id: ''},
    showForm: false,
  }),
  getters: {
  },
  mutations: {
    setDataToSend (state, dataToSend) {
      state.dataToSend = dataToSend;
    },
    setShowForm (state, showForm) {
      state.showForm = showForm;
    },
    setDataTown (state, town) {
      state.dataToSend.city_id = town;
    },
    setDataItem (state, key, meaning) {
      state.dataToSend[key] = meaning;
    },
  },
  actions: {
    createDataToSend ({commit}, data){
      commit('setDataToSend', data);
    },
    changeShowForm ({commit}, position){
      commit('setShowForm', position);
    },
    changeDataTown ({commit}, number){
      commit('setDataTown', number);
    },
  },
  modules: {
  }
})
