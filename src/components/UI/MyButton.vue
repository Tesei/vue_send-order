<template>

    <!-- <button v-if="color" class="btn"
        :class="{'_green': color === 'green', '_blue': color === 'blue', '_teal': color === 'teal','_gray': color === 'gray'}">
        <slot></slot>
    </button> -->

    <button class=" text-white font-400 py-2 px-4 rounded"
        :class="{'bg-green-500 hover:bg-green-700': color === 'green', 'bg-blue-500 hover:bg-blue-700': color === 'blue', 'bg-teal-500 hover:bg-teal-700': color === 'teal','bg-gray-500 hover:bg-gray-700': color === 'gray'}">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'my-button',
    props: {
        color: [String]
    }
}
</script>

<style scoped lang="scss">
.btn {
    display: flex;
    justify-content: center;
    align-items: center;


    border-radius: 6px;
    padding: 12px 13px;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    text-align: center;
    letter-spacing: 0.07em;
    color: white;
    transition: all 0.3s ease 0s;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

    &._active {
        color: #FFFFFF;
        background: #7BAE73;
    }

    @media (min-width: 991.98px) {
        &:hover {
            transform: scale(1.05);
        }
    }
}

._green {
    background: #16A34A;
}

._blue {
    background: #3B82F6;
}

._teal {
    background: #0D9488;
}

._gray {
    background: gray;
    // pointer-events: none;
}
</style>