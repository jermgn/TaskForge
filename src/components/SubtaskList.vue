<script setup lang="ts">
import { useSubtaskStore } from '@/stores/SubtaskStore';
import SubtaskItem from '@/components/SubtaskItem.vue';
import type { Task } from '@/types/Task';

defineProps<{
    task: Task,
}>();

const subtaskStore = useSubtaskStore();

const { getSubtasksByTaskId } = subtaskStore;

</script>

<template>
    <div v-for="subtask in getSubtasksByTaskId(task.id)" :key="subtask.id">
        <SubtaskItem :subtask="subtask" />
    </div>
</template>

<style scoped>

</style>