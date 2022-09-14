<template>

    <button v-if="color" class="btn"
        :class="{'_green': color === 'green', '_blue': color === 'blue', '_teal': color === 'teal','_gray': color === 'gray'}">
        <slot></slot>
    </button>

    <!-- <button v-else class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded btn">
        <slot></slot>
    </button> -->
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

    @media (min-width: $md2) {
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
}
</style>