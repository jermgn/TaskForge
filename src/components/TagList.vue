<script setup lang="ts">
import TagItem from './TagItem.vue';

defineProps(['tags']);
</script>

<template>
    <div v-for="tag in tags" :key="tag.id">
        <TagItem :tag="tag" />
    </div>
</template>

<style scoped>

</style>