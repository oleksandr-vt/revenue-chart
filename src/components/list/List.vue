<script setup>
import Search from './Search.vue';
import ListTable from './ListTable.vue';
import { onMounted, ref } from "vue";
import { useList } from '@/api/useList';

let listData = ref([])

onMounted(async () => {
    try {
        listData.value = await useList()

        if (!listData) {
            throw new Error(e)
        }
    } catch (e) {
        console.log(e)
        listData.value = false
    }
})


const filter = (s) => {
    listData.filter((item) => {
        item.name.toLowerCase().includes(s)
    })
}
</script>
    
<template>
    <div class="wrapper">
        <Search :filter="filter" />
        <ListTable :listData="listData" />
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