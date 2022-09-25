<template>

    <button
        class="flex justify-center content-center text-white font-400 py-3 px-3 rounded-md transition-all cursor-pointer shadow-sm h-10 leading-4">
        <slot></slot>
    </button>

</template>

<script>
export default {
    name: 'my-button',
    props: {
        color: [String]
    },
}
</script>