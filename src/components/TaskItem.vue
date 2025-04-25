<script setup lang="ts">
import { useSubTaskStore } from '@/stores/SubTaskStore';
import type { Task } from '@/types/Task';

defineProps<{
    task: Task,
}>();

const subTaskStore = useSubTaskStore();

const { getSubtasksByTaskId } = subTaskStore;
</script>

<template>
    <div>{{ task }}</div>
    <div v-for="subtask in getSubtasksByTaskId(task.id)" :key="subtask.id">
        {{ subtask }}
    </div>
</template>

<style scoped>

</style>