<script setup lang="ts">
import type { SubTask } from '@/types/SubTask';

defineProps<{
    subtask: SubTask,
}>();
</script>

<template>
    <div>{{ subtask.name }}</div>
</template>

<style scoped>

</style>