<script setup>
import SearchIcon from '../icons/SearchIcon.vue';

const props = defineProps({
    filter: String
})

const f = (e) => {
    const target = e.target
    const value = target.value.toLowerCase()
    if (props.filter) props.filter(value)
}
</script>
        
<template>
    <label class="label" for="search">
        <SearchIcon />
        <input @keyup="f" id="search" class="search" type="text" placeholder="Search...">
    </label>
</template>
    
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.label {
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: #F9FAFB;
    border: 2px solid $color-gray-border;
    border-radius: 8px;

    &:has(.search:focus) {
        border: 2px solid $color-gray-light;
        transition: 0.15s all ease;
    }
}

.search {
    width: 100%;
    height: 20px;
    background-color: transparent;
    outline: none;
    border: none;
    font-family: $fontInter;
    font-size: 14px;
    color: $color-gray-light;

    &::placeholder {
        opacity: 0.5;
    }
}
</style>