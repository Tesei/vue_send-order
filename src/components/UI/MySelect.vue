<template>
    <div class="form__line2 relative basis-3/12">

        <label
            :for="nameId"
            class="form__label2 font-400 text-base text-stone-900 mb-1 inline-block relative"
            :class="{ 'form__label_req': req }"
        >
            <slot></slot>
        </label>

        <select
            class="select__item2 w-full bg-white shadow-sm rounded-md h-10 px-3 py-2 font-400 text-base text-slate-600 flex justify-start items-start border-slate-300 border"
            @change="changeOption"
            v-model="defaultTown"
        >
            <option
                class="select__option2 text-gray-500 pointer px-4 py-2 font-400 text-base"
                v-for="option in options"
                :key="option.id"
                :value="option.id"
                :id="nameId"
            >
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

<style scoped>
.form__label_req::after {
    content: '*';
    position: absolute;
    color: #FF8484;
    top: -4px;
    right: -9px;
    border-radius: 50%;
}
</style>