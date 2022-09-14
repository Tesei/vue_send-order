<template>
    <div class="form__line">

        <label :for="nameId" class="form__label" :class="{ 'form__label_req': req }">
            <slot></slot>
        </label>

        <input v-if="typeInput === 'tel'" v-mask="'+7 (###) ###-##-##'" :type="typeInput" class="input"
            :value="modelValue" @input="updateInput"
            :class="{ '_req': req, '_active': checkDataValue, '_error': hasError }" :id="nameId" autocomplete="off"
            name="form[]" data-value="" :placeholder="placeHolder" :data-error="dataError">


        <input v-else :type="typeInput" class="input" :value="modelValue" @input="updateInput"
            :class="{ '_req': req, '_active': checkDataValue, '_error': hasError }" :id="nameId" autocomplete="off"
            name="form[]" data-value="" :placeholder="placeHolder" :data-error="dataError">


        <div v-if="hasError" class="form__error">{{ dataError }}</div>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
    name: 'my-input',
    directives: { mask },

    data() {
        return {
            validationCompleate: false
        }
    },
    props: {
        modelValue: [String, Number],
        nameId: {
            type: [String, Number],
            default: () => ''
        },
        req: {
            type: Boolean,
            required: true,
            default: false,
        },
        placeHolder: {
            type: [String, Number],
            default: () => ''
        },
        dataError: {
            type: [String, Number],
            default: () => ''
        },
        clickButton: {
            type: [Boolean, String],
            default: false
        },
        typeInput: {
            type: [String],
            default: 'text'
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        checkData() {
            if ((this.typeInput === 'tel') && this.modelValue.length !== 18) return true;
            else if ((this.typeInput === 'email') && this.validateEmail !== true) return true;
            else if (this.modelValue == false) return true;
            return false;
        },
    },
    computed: {
        checkDataValue() {
            if (this.modelValue) return true;
            return false;
        },
        validateEmail() {
            // eslint-disable-next-line
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.modelValue)) return true
            return false
        },
        // Показываем ошибку если данные не введены
        hasError() {
            if (this.clickButton) {
                if ((this.typeInput === 'tel') && this.modelValue.length !== 18) return true;
                else if ((this.typeInput === 'email') && this.validateEmail !== true) return true;
                else if (this.modelValue == false) return true;
            }
            return false;
        },
    },
    watch: {
        modelValue() {
            this.validationCompleate = !this.checkData()
            this.$emit('update:valid', this.validationCompleate)
        }
    }
}
</script>

<style lang="scss" scoped>
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
        outline: none;
    }
}

.input {
    display: block;
    background: white;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    width: 100%;
    padding: 9px 13px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #6B7280;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #D1D5DB;

    &:focus {
        box-shadow: 1px 3px 8px rgba(0, 128, 0, 0.3);
    }

    &._focus {
        color: #3F3F3F;
    }

    &._error {
        border: 1px solid #FF8484;
    }
}
</style>