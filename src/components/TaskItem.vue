<script setup lang="ts">
import type { Task } from '../types/Task';

defineProps<{
    task: Task,
}>();
</script>

<template>
    <div>{{ task }}</div>
</template>

<style scoped>

</style>