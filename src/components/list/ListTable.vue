<script setup>
import { ref } from "vue";
import { getFormattedDate } from "@/const";

const props = defineProps({
    listData: Array
})

const selectedSortOption = ref('')

const sortFunc = (value) => {
    selectedSortOption.value = value

    props.listData.sort((a, b) => {
        if (selectedSortOption.value === 'name') {
            if ((a.name ?? '') < (b.name ?? '')) return -1
            if ((a.name ?? '') > (b.name ?? '')) return 1
        }

        if (selectedSortOption.value === 'date') {
            const x = new Date(a.date)
            const y = new Date(b.date)

            if (x.getTime() < y.getTime()) return -1
            if (x.getTime() > y.getTime()) return 1
        }

        if (selectedSortOption.value === 'state') {
            return (a.isActive === b.isActive) ? 0 : a.isActive ? -1 : 1;
        }

        return 0
    })
}
</script>
        
<template>
    <table class="table">
        <thead>
            <td @click="sortFunc('name')"><span>Name</span></td>
            <td @click="sortFunc('date')"><span>Date</span></td>
            <td @click="sortFunc('state')"><span>State</span></td>
        </thead>

        <tr v-for="item in props.listData" v-if="props.listData">
            <td class="name">{{ item.name }}</td>
            <td class="date">{{ getFormattedDate(new Date(item.date)) }}</td>
            <td class="state" :class="{ active: item.isActive }">{{ item.isActive ? 'Active' : 'Disable' }}</td>
        </tr>

        <tr v-else>
            <td>Oops, an error has been occured, try again.</td>
        </tr>
    </table>
</template>
    
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.table {
    color: $color-gray-light;
    border-spacing: 0;
    border: 1px solid $color-gray-border;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
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
            cursor: pointer;

            @media (max-width: $breakpoint576) {
                padding: 12px;
            }

            &:hover {
                span {
                    text-decoration: underline;
                }
            }
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

            @media (max-width: $breakpoint576) {
                padding: 16px 12px;
            }
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