<template>

  <div class="wrapper">
    <div class="main">
      <div class="main__content _container">

        <div class="main__btn-wrap">
          <my-button :color="'blue'" class="btn__toMoscow" @click="openForm(1)">Заказать в Москву
          </my-button>
          <my-button :color="'teal'" class="btn__toSpb" @click="openForm(2)">
            Заказать в Санкт-Петербург</my-button>
        </div>


        <my-dialog @click.self="closeDialog" v-if="showForm && !(orderSuccess || orderError) && !dataSending">
          <form-send class="main__form-toMoscow" />
        </my-dialog>

        <!-- Прелоадер -->
        <my-dialog @click.self="closeDialog" v-else-if="dataSending">
          <my-preloader />
        </my-dialog>

        <my-dialog @click.self="closeDialog" v-else-if="showForm && (orderSuccess || orderError)">
          <h2 v-if="orderError" class="main__error-message">При отправке данных возникла ошибка! <br>Попробуйте
            отправить данные снова.</h2>
          <div class="main__response-message" v-html="messageForUser"></div>
        </my-dialog>


      </div>
    </div>
  </div>

</template>

<script>
import FormSend from './components/FormSend.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    FormSend
  },
  methods: {
    ...mapActions({
      changeDataTown: 'changeDataTown',
      changeShowForm: 'changeShowForm',
      showClickButton: 'showClickButton',
      createDataToSend: 'createDataToSend',
      clearCondidtionOrder: 'clearCondidtionOrder',
    }),
    openForm(number) {
      this.changeDataTown(number);
      this.changeShowForm(true)
    },
    closeDialog() {
      this.changeShowForm(false)
      this.showClickButton(false)

      this.clearCondidtionOrder()
      this.createDataToSend({})
    }
  },
  computed: {
    ...mapState({
      selectedTown: state => state.selectedTown,
      dataTown: state => state.dataToSend.city_id,
      showForm: state => state.showForm,
      cityPicked: state => state.dataToSend.city_id,
      orderError: state => state.orderError,
      orderSuccess: state => state.orderSuccess,
      messageForUser: state => state.messageForUser,
      dataSending: state => state.dataSending,
    }),
  },
}
</script>

<style lang="scss">
#app {}

.main {

  // .main__btn-wrap
  &__btn-wrap {
    display: flex;
    margin-top: 20px;
  }

  // .main__form-toMoscow
  &__form-toMoscow {}

  // .main__form-toSpb
  &__form-toSpb {}

  // .main__error-message
  &__error-message {
    color: #FF8484;
    font-size: 2rem;
    margin-bottom: 15px;
  }
}

// .btn__toMoscow
.btn__toMoscow {
  margin-right: 20px !important;
}

// .btn__toSpb
.btn__toSpb {}
</style>
