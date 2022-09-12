<template>
    <div class="form__line">

        <label :for="nameId" class="form__label" :class="{ 'form__label_req': req }">
            <slot></slot>
        </label>

        <select class="select__item" @change="changeOption" v-model="defaultTown">
            <option class="select__option" v-for="option in options" :key="option.id" :value="option.id">
                {{ option.name }}
            </option>
        </select>

    </div>

</template>


<script>
import { mapState, } from 'vuex'

export default {
    name: 'my-select',
    props: {
        modelValue: [Number, String],
        order: [String, Number],
        options: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        changeOption(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    },
    computed: {
        defaultTown() {
            return this.modelValue
        },
        ...mapState({
            selectedTown: state => state.selectedTown,
            dataToSend: state => state.dataToSend,
            // cities: state => state.cities,
        }),
    },
}
</script>

<style lang="scss" scoped>
.select {
    &__item {
        width: 100%;

        position: relative;
        cursor: pointer;
        padding: 9px 13px;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2rem;
        color: #6B7280;
        background: white;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        outline: none;
        border: 1px solid #D1D5DB;
    }

    &__option-default {
        background-color: #e8e6e3;
    }

    &__option {
        color: darken(#B4B4B4, 20%);
        display: block;
        min-width: 100%;
        left: 0;
        border: 1px solid #d9d9d9;
        border-top: 0;
        background-color: #FFFEFB;
        font-size: 1.6rem;
        line-height: 2.2rem;
        min-width: 100%;
        cursor: pointer;
        padding: 10px 10px;
        margin: 0px 0px 0px 0px;

        @media (min-width: 992px) {
            &:hover {
                background: darken(#FFFEFB, 20%);
            }
        }
    }
}
</style>