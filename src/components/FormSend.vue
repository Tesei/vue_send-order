<template>

    <div class="mr-15">
        <h2 class="font-normal font-500 text-2xl mb-6">Заказать звонок</h2>
        <div class="form__row flex mb-4 flex-row flex-wrap justify-end items-end" @keyup="checkValid">
            <my-input :nameId="1" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[0]"
                :data-error="dataError[0]" :typeInput="'text'"
                class="flex-auto mb-5 sm:pr-7 md:pr-5 basis-full sm:basis-2/6 md:basis-1/4"
                v-model.trim="insertedData.name" v-model:valid="valid.name">
                Имя
            </my-input>
            <my-input :nameId="2" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[1]"
                :data-error="dataError[1]" :typeInput="'tel'"
                class="form__input2 form__column2 mb-5 flex-auto sm:pr-7 md:pr-5 basis-full sm:basis-2/6 md:basis-1/4"
                v-model="insertedData.phone" v-model:valid="valid.phone">
                Телефон
            </my-input>
            <my-input :nameId="3" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[2]"
                :data-error="dataError[2]" :typeInput="'email'"
                class="form__input2 form__column2 mb-5 flex-auto md:pr-5 basis-full sm:basis-2/6 md:basis-1/4"
                v-model.trim="insertedData.email" v-model:valid="valid.email">
                Email
            </my-input>
            <my-select :nameId="4" :req="true" :options="cities" v-model="insertedData.city_id"
                class="form__select2 form__column2 flex-auto mb-5 sm:mb-0 md:mb-5 sm:pr-7 md:pr-0 basis-full sm:basis-4/6 md:basis-1/4">
                Город
            </my-select>
            <my-button :color="checkData ? 'green' : 'gray'"
                class="form__button2 flex-init basis-full sm:basis-2/6 md:basis-1/4 md:ml-5"
                @click="prepareDataToSend(insertedData)">
                Отправить
            </my-button>
        </div>
        <!-- <my-button :color="checkData ? 'green' : 'gray'" class="form__button2 self-end w-1/4 inline-flex"
            @click="prepareDataToSend(insertedData)">
            Отправить
        </my-button> -->
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
                    return false
                }
            }
            this.setApproveData(true)
            return true
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


<style scoped lang="scss">
// .form {
//     display: flex;
//     flex-direction: column;
//     align-content: center;
//     justify-content: center;

//     // .form__title
//     &__title {
//         font-style: normal;
//         font-weight: 500;
//         font-size: 24px;
//         line-height: 24px;
//         margin-bottom: 25px;
//     }

//     // form__column
//     &__column {
//         flex: 0 1 25%;
//     }

//     // .form__input
//     &__input {
//         margin-right: 20px;

//         &:last-child {
//             margin: 0px 0px 0px 0px;
//         }
//     }

//     // .form__select
//     &__select {}

//     // .form__button
//     // &__button {
//     //     align-self: flex-end;
//     //     width: calc(25% - 16px);
//     //     height: 38px;
//     // }

// }

// .form__row
.form__row:last-child {
    margin: 0px 0px 0px 0px;
}
</style>