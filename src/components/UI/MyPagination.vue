<template>

    <!-- :style и :class позволяет нам динамически задавать стили по условию -->
    <div class="page__wrapper">
        <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
            'current-page': currentPage === pageNumber
        }" @click='$emit("changePage", pageNumber)'>
            {{ pageNumber }}
        </div>
    </div>

</template>


<script>

export default {
    name: 'my-pagination',
    props: {
        totalPages: [Number],
        currentPage: [Number]
    }
}
</script>


<style scoped>
.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid #000;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}
</style>