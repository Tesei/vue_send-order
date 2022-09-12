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
    selectedTown: ''
  }),
  getters: {
  },
  mutations: {
    setDataToSend (state, dataToSend) {
      state.dataToSend = dataToSend;
    },
    setSelectedTown (state, selectedTown) {
      state.selectedTown = selectedTown;
    },
  },
  actions: {
    pickTheTown ({commit}, townId){
      commit('setSelectedTown', townId);
    },
    createDataToSend ({commit}, data){
      commit('setDataToSend', data);
    },
  },
  modules: {
  }
})
