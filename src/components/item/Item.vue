<script setup>
import { onMounted, ref } from 'vue';
import { useChartData } from '../../api/useChartData';
import router from "../../router";

const itemId = router.currentRoute.value
let chartData = ref([])

onMounted(async () => {
    try {
        const f = await useChartData(itemId.params.id)
        if (!f) {
            throw new Error(e)
        }

        chartData.value = f
    } catch (e) {
        console.log(e)
    }
})
</script>

<template>
    <h2>Revenue</h2>
    <p>{{ chartData.id }}</p>
    <p v-for="data in chartData.data">{{ data }}</p>
</template>