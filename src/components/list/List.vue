<script setup>
import Search from './Search.vue';
import ListTable from './ListTable.vue';
</script>
    
<template>
    <div class="wrapper">
        <Search />
        <ListTable />
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.wrapper {
    min-height: 100vh;
    padding: 115px 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
}
</style>