<script setup>
import Search from './Search.vue';
import ListTable from './ListTable.vue';
import { onMounted, watch, ref } from "vue";
import { useList } from '@/api/useList';

let listData = ref([])

onMounted(async () => {
    try {
        const f = await useList()
        if (!f) {
            throw new Error(e)
        }

        listData.value = f
    } catch (e) {
        console.log(e)
    }
})

const currentFeeds = ref(listData.value)

watch(() => listData.value, newFeeds => {
    currentFeeds.value = newFeeds
})

const filter = (s) => {
    if (!s) {
        currentFeeds.value = listData.value
        return
    }

    currentFeeds.value = listData.value.filter((a) => a.name.toLowerCase().includes(s))
}
</script>
    
<template>
    <div class="wrapper">
        <Search :filter="filter" />
        <ListTable :listData="currentFeeds" />
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