<template>

    <div class="form" @click.self="changeShowForm(false), showClickButton(false)" @keyup="checkValid">
        <div class="form__wrap">
            <h2 class="form__title">Заказать звонок</h2>
            <div class="form__row">
                <my-input :nameId="1" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[0]"
                    :data-error="dataError" :typeInput="'text'" class="form__input form__column" v-model.trim="name"
                    v-model:valid="valid[0]">
                    Имя
                </my-input>
                <my-input :nameId="2" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[1]"
                    :data-error="dataError" :typeInput="'tel'" class="form__input form__column" v-model="phone"
                    v-model:valid="valid[1]">
                    Телефон
                </my-input>
                <my-input :nameId="3" :req="true" :clickButton="clickButton" :placeHolder="placeHolders[2]"
                    :data-error="dataError" :typeInput="'email'" class="form__input form__column" v-model.trim="email"
                    v-model:valid="valid[2]">
                    Email
                </my-input>
                <my-select :nameId="4" :req="true" :options="cities" v-model="idTown" class="form__select form__column">
                    Город
                </my-select>
            </div>
            <my-button :color="valid ? 'green' : 'gray'" class="form__button" @click="checkDataToSend">Отправить
            </my-button>
        </div>
    </div>

</template>


<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'form-send',
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            idTown: '',
            validAll: '',
            valid: [false, false, false]
            // valid: {
            //     name: false,
            //     phone: false,
            //     email: false,
            // },
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
        ...mapGetters({
            // approveValid: 'approveValid',
        }),
        // validAll() {
        //     if (name: t, phone: this.phone, email: this.email, city_id: this.idTown) return true
        // }
    },
    methods: {
        ...mapActions({
            changeShowForm: 'changeShowForm',
            createDataToSend: 'createDataToSend',
            checkValidForm: 'checkValidForm',
            showClickButton: 'showClickButton',
            checkInput: 'checkInput',
        }),
        // todo Вынести в стор
        async checkDataToSend() {
            if (this.approveValid) console.log('hello');

            this.showClickButton(true)
            await this.createDataToSend({ name: this.name, phone: this.phone, email: this.email, city_id: this.idTown });
            this.checkValidForm()
        },
        checkValid() {
            console.log(this.checkValid2());
            this.validAll = this.checkValid2()
        },
        checkValid2() {

            let flag = false
            this.valid.forEach(item => {

                if (!item) {
                    flag = false
                    return flag
                }
                else flag = true
            })
            return flag
        }
    },
    // watch: {
    //     valid: {
    //         handler(item) {
    //             console.log(item);
    //         }
    //     },
    //     deep: true
    // },
    mounted() {
        this.idTown = this.dataTown;
    }
}
</script>


<style scoped lang="scss">
.form {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(107, 114, 128, 0.75);
    z-index: 5;
    display: flex;
    align-content: center;
    justify-content: center;

    // .form__wrap
    &__wrap {
        align-self: center;
        background: #FFFFFF;
        box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-radius: 8px;
        padding: 25px;
        display: flex;
        flex-direction: column;
    }

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