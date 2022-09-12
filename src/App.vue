<template>


  <div class="wrapper">
    <div class="main">
      <div class="main__content _container">

        <div class="main__btn-wrap">
          <my-button :color="'blue'" class="btn__toMoscow" @click="pickTheTown('1')">Заказать в Москву</my-button>
          <my-button :color="'teal'" class="btn__toSpb" @click="pickTheTown('2')">Заказать в Санкт-Петербург</my-button>
        </div>

        <form-send class="main__form-toMoscow" v-if="(selectedTown === '1')" />
        <form-send class="main__form-toSpb" v-else-if="(selectedTown ==='2')" />

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
      pickTheTown: 'pickTheTown',
    }),
  },
  computed: {
    ...mapState({
      selectedTown: state => state.selectedTown
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
}



// .btn__toMoscow
.btn__toMoscow {
  margin-right: 20px !important;
}

// .btn__toSpb
.btn__toSpb {}
</style>
