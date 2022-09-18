<template>

    <div class="bg-gray-500/70 inset-0 fixed flex items-center  w-full"
        @click.self="changeShowForm(false), showClickButton(false)">
        <div class="bg-white mx-auto rounded-md p-7 flex justify-center m-3 
            max-w-none sm:max-w-2xl md:max-w-screen-md flex justify-center content-center flex-col">
            <slot></slot>
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


<style scoped>
.dialog__content {
    margin: auto;
    background: white;
    border-radius: 8px;
    min-height: 50px;
    min-width: 300px;
    padding: 25px;

    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    align-self: center;
    display: flex;
    flex-direction: column;
}
</style>