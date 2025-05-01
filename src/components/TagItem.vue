<script setup lang="ts">
import type { Tag } from '@/types/Tag';

defineProps<{
    tag: Tag,
}>();
</script>

<template>
    <p>{{ tag.label }}</p>
</template>

<style scoped>

</style>