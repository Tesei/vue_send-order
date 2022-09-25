<template>

  <div class="wrapper" v-cloak>
    <div class="main">
      <div class="main__content max-w-2xl p-6">

        <div class="sm:flex">
          <my-button class="mx-1 my-2 w-full sm:w-auto bg-blue-500 hover:bg-blue-700" @click="openForm(1)">
            Заказать в Москву
          </my-button>
          <my-button class="mx-1 my-2 w-full sm:w-auto bg-teal-500 hover:bg-teal-700" @click="openForm(2)">
            Заказать в Санкт-Петербург
          </my-button>
        </div>

        <my-dialog @click.self="closeDialog" v-if="showForm && !(orderSuccess || orderError) && !dataSending">
          <form-send />
        </my-dialog>

        <!-- Прелоадер -->
        <my-dialog @click.self="closeDialog" v-else-if="dataSending">
          <my-preloader />
        </my-dialog>

        <my-dialog @click.self="closeDialog" v-else-if="showForm && (orderSuccess || orderError)">
          <h2 v-if="orderError" class="text-red-400 text-2xl mb-4">При отправке данных возникла ошибка! <br>Попробуйте
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
