<template>

    <div class="form">
        <h2 class="form__title">Заказать звонок</h2>
        <div class="form__row" @keyup="checkValid">
            <my-input :nameId="1" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[0]"
                :data-error="dataError[0]" :typeInput="'text'" class="form__input form__column"
                v-model.trim="insertedData.name" v-model:valid="valid.name">
                Имя
            </my-input>
            <my-input :nameId="2" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[1]"
                :data-error="dataError[1]" :typeInput="'tel'" class="form__input form__column"
                v-model="insertedData.phone" v-model:valid="valid.phone">
                Телефон
            </my-input>
            <my-input :nameId="3" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[2]"
                :data-error="dataError[2]" :typeInput="'email'" class="form__input form__column"
                v-model.trim="insertedData.email" v-model:valid="valid.email">
                Email
            </my-input>
            <my-select :nameId="4" :req="true" :options="cities" v-model="insertedData.city_id"
                class="form__select form__column">
                Город
            </my-select>
        </div>
        <my-button :color="approveData ? 'green' : 'gray'" class="form__button"
            @click="prepareDataToSend(insertedData)">Отправить
        </my-button>
    </div>

</template>


<script>
import { mapState, mapActions } from 'vuex'

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
        approveData() {
            for (let key in this.valid) {
                if (this.valid[key] == false) {
                    return false
                }
            } return true
        }
    },
    methods: {
        ...mapActions({
            prepareDataToSend: 'prepareDataToSend',
        }),
        // clearUpData() {
        //     this.insertedData = {}
        //     // this.insertedData = {}
        // }
    },
    mounted() {
        this.insertedData.city_id = this.dataTown;
    }
}
</script>


<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    // .form__title
    &__title {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 25px;
    }

    // .form__row
    &__row {
        display: flex;
        margin-bottom: 18px;

        &:last-child {
            margin: 0px 0px 0px 0px;
        }
    }

    // form__column
    &__column {
        flex: 0 1 25%;
    }

    // .form__input
    &__input {
        margin-right: 20px;

        &:last-child {
            margin: 0px 0px 0px 0px;
        }
    }

    // .form__select
    &__select {}

    // .form__button
    &__button {
        align-self: flex-end;
        width: calc(25% - 16px);
        height: 38px;
    }

}
</style>