<script setup lang="ts">
import { useSubTaskStore } from '@/stores/SubTaskStore';
import type { Task } from '@/types/Task';
import SubTaskList from '@/components/SubTaskList.vue';

defineProps<{
    task: Task,
}>();

const subTaskStore = useSubTaskStore();

const { getSubtasksByTaskId } = subTaskStore;
</script>

<template>
    <div>{{ task.name }}</div>
    <SubTaskList :subtasks="getSubtasksByTaskId(task.id)" />
</template>

<style scoped>

</style>