<template>
    <div class="dialog" v-if="show === true" @click="hideDialog">
        <!-- Отключаем всплытие словом stop в директиве @click.stop  - после этого окно закрывается только 
    при нажатии на область за пределами содержимого диалогового окна -->
        <div @click.stop class="dialog__content">
            <!-- Размещаем тег <slot></slot> чтобы диалоговое окно было динамически изменяемым -->
            <slot></slot>
        </div>
    </div>

</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: 'my-dialog',
    // Подключаем миксин
    mixins: [toggleMixin],
    mounted() {
        console.log('dialog mounted');
    }
}
</script>


<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.507);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
}
</style>