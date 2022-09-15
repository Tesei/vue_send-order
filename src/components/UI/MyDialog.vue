<template>

    <div class="dialog" @click.self="changeShowForm(false), showClickButton(false)">
        <!-- <div class="dialog" @click.self="changeShowForm(false), showClickButton(false)"> -->
        <div class="dialog__content">
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
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(107, 114, 128, 0.75);
    position: fixed;
    display: flex;
}

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