<script setup>
import { onMounted, ref } from "vue";
import { useList } from '@/api/useList';

let listData = ref([])

const getFormattedDate = (date) => new Intl.DateTimeFormat('uk-UA').format(date)

onMounted(async () => {
    try {
        listData.value = await useList()

        if (!listData) {
            throw new Error(e)
        }
    } catch (e) {
        console.log(e);
    }
})
</script>
        
<template>
    <table class="table">
        <thead>
            <td><span>Name</span></td>
            <td><span>Date</span></td>
            <td><span>State</span></td>
        </thead>

        <tr v-for="item in listData">
            <td class="name">{{ item.name }}</td>
            <td class="date">{{ getFormattedDate(new Date(item.date)) }}</td>
            <td class="state" :class="{ active: item.isActive }">{{ item.isActive ? 'Active' : 'Disable' }}</td>
        </tr>
    </table>
</template>
    
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.table {
    color: $color-gray-light;
    border-spacing: 0;
    border: 2px solid $color-gray-border;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    border-collapse: collapse;

    thead {
        height: 40px;
        background-color: $color-white-light;

        td {
            padding: 12px 24px;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 12px;
            width: 33.333%;
        }
    }

    tr {
        height: 52px;
        border-top: 1px solid $color-gray-border;
        cursor: pointer;

        &:hover {
            background-color: $color-white-light;
            transition: 0.3s all ease;
        }

        td {
            padding: 16px 24px;
            font-size: 14px;
        }

        .name {
            color: $color-gray-dark;
            font-weight: 500;
        }

        .state {
            color: $color-fuschia;

            &.active {
                color: $color-iris;
            }
        }
    }
}
</style>