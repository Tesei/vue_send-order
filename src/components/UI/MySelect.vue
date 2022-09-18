<template>
    <div class="form__line2 relative basis-3/12">

        <label :for="nameId" class="form__label2 font-400 text-base text-stone-900 mb-1 inline-block relative"
            :class="{ 'form__label_req': req }">
            <slot></slot>
        </label>

        <select
            class="select__item2 w-full bg-white shadow-sm rounded-md h-10 px-3 py-2 font-400 text-base text-slate-600 flex justify-start items-start border-slate-300 border"
            @change="changeOption" v-model="defaultTown">
            <option class="select__option2 text-gray-500 pointer px-4 py-2 font-400 text-base" v-for="option in options"
                :key="option.id" :value="option.id" :id="nameId">
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
        nameId: {
            type: [String, Number],
            default: () => ''
        },
        req: {
            type: Boolean,
            default: false,
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
        }),
    },
}
</script>

<style lang="scss" scoped>
.form__label_req::after {
    content: '*';
    position: absolute;
    color: #FF8484;
    top: -4px;
    right: -9px;
    border-radius: 50%;
}


// .select {
//     &__item {
//         width: 100%;

//         position: relative;
//         cursor: pointer;
//         padding: 9px 13px;
//         font-style: normal;
//         font-weight: 400;
//         font-size: 1.6rem;
//         line-height: 2rem;
//         color: #6B7280;
//         background: white;
//         box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//         border-radius: 6px;
//         outline: none;
//         border: 1px solid #D1D5DB;
//     }

//     &__option {
//         color: darken(#B4B4B4, 20%);
//         display: block;
//         min-width: 100%;
//         left: 0;
//         border: 1px solid #d9d9d9;
//         border-top: 0;
//         background-color: #FFFEFB;
//         font-size: 1.6rem;
//         line-height: 2rem;
//         min-width: 100%;
//         cursor: pointer;
//         padding: 10px 10px;
//         margin: 0px 0px 0px 0px;

//         @media (min-width: 992px) {
//             &:hover {
//                 background: darken(#FFFEFB, 20%);
//             }
//         }
//     }
// }
</style>