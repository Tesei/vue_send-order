<template>

  <div class="wrapper">
    <div class="main">
      <div class="main__content max-w-2xl p-6">

        <div class="sm:flex">
          <my-button :color="'blue'" class="m-1 w-full sm:w-auto" @click="openForm(1)">
            Заказать в Москву
          </my-button>
          <my-button :color="'teal'" class="m-1 w-full sm:w-auto" @click="openForm(2)">
            Заказать в
            Санкт-Петербург
          </my-button>
        </div>


        <my-dialog @click.self="closeDialog" v-if="showForm && !(orderSuccess || orderError) && !dataSending">
          <form-send class="main__form-toMoscow2" />
        </my-dialog>

        <!-- Прелоадер -->
        <my-dialog @click.self="closeDialog" v-else-if="dataSending">
          <my-preloader />
        </my-dialog>

        <my-dialog @click.self="closeDialog" v-else-if="showForm && (orderSuccess || orderError)">
          <h2 v-if="orderError" class="text-red-light text-2xl mb-4">При отправке данных возникла ошибка! <br>Попробуйте
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

<!-- <style lang="scss">
#app {}
</style> -->
