<template>
    <div class="form__line2 relative">

        <label
            :for="nameId"
            class="form__label2 font-400 text-base text-stone-900 mb-1 inline-block relative"
            :class="{ 'form__label_req': req }"
        >
            <slot></slot>
        </label>

        <input
            v-if="typeInput === 'tel'"
            v-mask="'+7 (###) ###-##-##'"
            :type="typeInput"
            class="input w-full bg-white shadow-sm rounded-md h-10 px-3 py-2 font-400 text-base text-slate-600 flex justify-start items-start border-slate-300 border"
            :value="modelValue"
            @input="updateInput"
            :class="{ '_req': req, '_active': checkDataValue, '_error': hasError }"
            :id="nameId"
            autocomplete="off"
            name="form[]"
            data-value=""
            :placeholder="placeHolder"
            :data-error="dataError"
        >


        <input
            v-else
            :type="typeInput"
            class="input w-full bg-white shadow-sm rounded-md w-43 h-10 px-3 py-2 font-400 text-base text-slate-600 flex justify-start items-start border-slate-300 border"
            :value="modelValue"
            @input="updateInput"
            :class="{ '_req': req, '_active': checkDataValue, '_error': hasError }"
            :id="nameId"
            autocomplete="off"
            name="form[]"
            data-value=""
            :placeholder="placeHolder"
            :data-error="dataError"
        >


        <div
            v-if="hasError"
            class="form__error2 absolute -bottom-5 left-0 font-400 text-xs text-red-400"
        >
            {{ dataError }}</div>
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
        // ???????????????????? ???????????? ???????? ???????????? ???? ??????????????
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

<style scoped>
.form__label_req::after {
    content: '*';
    position: absolute;
    color: #FF8484;
    top: -4px;
    right: -9px;
    border-radius: 50%;
}

.input:focus {
    box-shadow: 1px 3px 8px rgba(0, 128, 0, 0.3);
    outline: none;
}

._error {
    border: 1px solid #FF8484;
}
</style>