<script setup lang="ts">
import type { SubTask } from '@/types/SubTask';

defineProps<{
    subtasks: SubTask[],
}>();
</script>

<template>
    <div v-for="subtask in subtasks" :key="subtask.id">
        {{ subtask.name }}
    </div>
</template>

<style scoped>

</style>