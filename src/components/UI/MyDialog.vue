<template>

    <div class="bg-gray-500/70 inset-0 fixed flex items-center  w-full"
        @click.self="changeShowForm(false), showClickButton(false)">
        <div class="mx-auto">
            <div class="bg-white rounded-md p-7 flex justify-center m-3
                max-w-none sm:max-w-2xl md:max-w-screen-md flex justify-center content-center flex-col">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'my-dialog',
    methods: {
        ...mapActions({
            changeShowForm: 'changeShowForm',
            showClickButton: 'showClickButton',
        }),
    },
}
</script>
