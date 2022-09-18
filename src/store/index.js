import { createStore } from 'vuex'
import axios from 'axios';

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
    approveData: false,
    clickButton: false,
    dataError: [
      "Поле является обязательным",
      "Телефон не корректен",
      "E-mail не корректен"
    ],
    dataSending: false,
    orderSuccess: false,
    orderError: false,
    errors: '',    // для записи ошибок
    messageForUser: ''
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
    setDataSending (state, dataSending) {     
      state.dataSending = dataSending;
    },
    setOrderSuccess (state, orderSuccess) {     
      state.orderSuccess = orderSuccess;
    },
    setOrderError (state, orderError) {     
      state.orderError = orderError;
    },
    setErrors (state, errors) {     
      state.errors = errors;
    },
    setMessageForUser (state, messageForUser) {     
      state.messageForUser = messageForUser;
    },
    setApproveData (state, approveData) {     
      state.approveData = approveData;
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
      commit('setClearNumber', state.dataToSend.phone.replace(/[()-\s]/g,'')); // Удаляем скобки и пробелы, тирэ
    },
    async prepareDataToSend({dispatch, state}, dataObject){
      dispatch('showClickButton', true)
      let notDependenceObject = JSON.parse(JSON.stringify(dataObject))
      await dispatch('createDataToSend', notDependenceObject)
      await dispatch('clearPhoneNumber')
      if(state.approveData) await dispatch('orderSend')
    },

    async orderSend ({state, commit}){
      commit("setDataSending", true);
      axios.post(state.adressServer, 
            state.dataToSend
        )
            .then((response) => {              
              commit("setDataSending", false);                  
              commit("setOrderSuccess", true);
              commit('setMessageForUser', response.data)
            })
            .catch(e => {
                commit("setErrors", e);
                commit("setDataSending", false);
                commit("setOrderError", true);
              commit('setMessageForUser', e)
            })
    },

    clearCondidtionOrder({commit}){
      commit("setOrderError", false);
      commit("setOrderSuccess", false);
    },

  },
  modules: {
  }
})
