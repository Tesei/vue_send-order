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
    // validForm: approveValid,
    clickButton: false,
    dataError: "Поле является обязательным",
    // phoneError: "Введите номер телефона полностью",
  }),
  getters: {
    // approveValid({dispatch}){
    //   return dispatch('checkValidForm')
    //   // if(dispatch('checkAmountNumbers') && dispatch('checkValidForm')) return true  
    //   // else return false       
    // }
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
    // setValidForm (state, validForm) {
    //   state.validForm = validForm;
    // },
    setClearNumber (state, newNumber) {
      state.dataToSend.phone = newNumber;
    },
    setClickButton (state, clickButton) {
      state.clickButton = clickButton;
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
    async checkValidForm ({state, dispatch}){      
      for(let key in state.dataToSend){
        if(state.dataToSend[key] == false) {          
          return false
        } 
        else {
          await dispatch('clearPhoneNumber')
          // if(state.dataToSend.phone.length !== 12){
          //   return false
          // }
          return true
        }
      }      
    },
    clearPhoneNumber ({commit, state}){
      commit('setClearNumber', state.dataToSend.phone.replace(/[()-\s]/g,'')); // Удаляем скобки и пробелы, тирэ
    },
    checkAmountNumbers({state}){
      if(state.dataToSend.phone.length < 18 || state.dataToSend.phone.length !== 12 && state.clickButton){
        console.log('1');        
        return false
      }
      else return true
    }
  },
  modules: {
  }
})
