<script setup lang="ts">
import { useSubTaskStore } from '@/stores/SubTaskStore';
import SubTaskItem from '@/components/SubTaskItem.vue';
import type { Task } from '@/types/Task';

defineProps<{
    task: Task,
}>();

const subTaskStore = useSubTaskStore();

const { getSubtasksByTaskId } = subTaskStore;

</script>

<template>
    <div v-for="subtask in getSubtasksByTaskId(task.id)" :key="subtask.id">
        <SubTaskItem :subtask="subtask" />
    </div>
</template>

<style scoped>

</style>