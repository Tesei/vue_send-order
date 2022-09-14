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
    validForm: false,
    clickButton: false,
    dataError: [
      "Поле является обязательным",
      "Телефон не корректен",
      "E-mail не корректен"
    ],
    template: ''
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
    setClearNumber (state, newNumber) {
      state.dataToSend.phone = newNumber;
    },
    setClickButton (state, clickButton) {
      state.clickButton = clickButton;
    },
    setClearNumber2 (state, newNumber) {
      state.template = newNumber;
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
    showClickButton ({commit}, position){
      commit('setClickButton', position);
    },
    clearPhoneNumber ({commit, state}){ 
      console.log(state.dataToSend.phone);     
      commit('setClearNumber2', state.dataToSend.phone.replace(/[()-\s]/g,'')); // Удаляем скобки и пробелы, тирэ
      commit('setClearNumber', state.dataToSend.phone.replace(/[()-\s]/g,'')); // Удаляем скобки и пробелы, тирэ
      // commit('setDataItem', phone, state.dataToSend.phone.replace(/[()-\s]/g,'')); // Удаляем скобки и пробелы, тирэ
    },
    async prepareDataToSend({dispatch}, dataObject){
      dispatch('showClickButton', true)
      await dispatch('createDataToSend', dataObject)
      await dispatch('clearPhoneNumber')
      await dispatch('clearPhoneNumber')
    }
  },
  modules: {
  }
})
