<template>

    <h2 class="font-normal font-500 text-2xl mb-9 sm:mb-6">Заказать звонок</h2>
    <div
        class="form__row flex flex-row flex-wrap justify-end items-end"
        @keyup="checkValid"
    >
        <my-input
            :nameId="1"
            :req="true"
            :clickButton="clickButton"
            :placeHolder="placeHolders[0]"
            :data-error="dataError[0]"
            :typeInput="'text'"
            class="flex-auto mb-5 sm:pr-7 md:pr-5 basis-full sm:basis-2/6 md:basis-1/4"
            v-model.trim="insertedData.name"
            v-model:valid="valid.name"
        >
            Имя
        </my-input>
        <my-input
            :nameId="2"
            :req="true"
            :clickButton="clickButton"
            :placeHolder="placeHolders[1]"
            :data-error="dataError[1]"
            :typeInput="'tel'"
            class="form__input2 form__column2 mb-5 flex-auto sm:pr-7 md:pr-5 basis-full sm:basis-2/6 md:basis-1/4"
            v-model="insertedData.phone"
            v-model:valid="valid.phone"
        >
            Телефон
        </my-input>
        <my-input
            :nameId="3"
            :req="true"
            :clickButton="clickButton"
            :placeHolder="placeHolders[2]"
            :data-error="dataError[2]"
            :typeInput="'email'"
            class="form__input2 form__column2 mb-5 flex-auto md:pr-5 basis-full sm:basis-2/6 md:basis-1/4"
            v-model.trim="insertedData.email"
            v-model:valid="valid.email"
        >
            Email
        </my-input>
        <my-select
            :nameId="4"
            :req="true"
            :options="cities"
            v-model="insertedData.city_id"
            class="form__select2 form__column2 flex-auto mb-5 sm:mb-0 md:mb-5 sm:pr-7 md:pr-0 basis-full sm:basis-4/6 md:basis-1/4"
        >
            Город
        </my-select>
        <my-button
            class="form__button2 flex-init basis-full sm:basis-2/6 md:basis-1/4 md:ml-5  "
            @click="prepareDataToSend(insertedData)"
            :class="checkData"
        >
            Отправить
        </my-button>
    </div>

</template>


<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'form-send',
    data() {
        return {
            insertedData: {
                name: '',
                phone: '',
                email: '',
                city_id: '',
            },
            valid: {
                name: false,
                phone: false,
                email: false,
            },
        }
    },
    computed: {
        ...mapState({
            placeHolders: state => state.placeHolders,
            cities: state => state.cities,
            dataTown: state => state.dataToSend.city_id,
            clickButton: state => state.clickButton,
            dataError: state => state.dataError,
        }),
        checkData() {
            for (let key in this.valid) {
                if (this.valid[key] == false) {
                    this.setApproveData('')
                    return 'bg-gray-400 hover:bg-gray-600'
                }
            }
            this.setApproveData(true)
            return 'bg-green-500 hover:bg-green-700'
        }
    },
    methods: {
        ...mapMutations({
            setApproveData: 'setApproveData',
        }),
        ...mapActions({
            prepareDataToSend: 'prepareDataToSend',
        }),
    },
    mounted() {
        this.insertedData.city_id = this.dataTown;
    }
}
</script>


<style scoped>
.form__row:last-child {
    margin: 0px 0px 0px 0px;
}
</style>