<script setup lang="ts">
import SubtaskItem from '@/components/SubtaskItem.vue';
import { useSubtaskStore } from '@/stores/SubtaskStore';
import type { Task } from '@/types/Task';

defineProps<{
    task: Task,
}>();

const subtaskStore = useSubtaskStore();
const { getSubtasksByTask } = subtaskStore;

</script>

<template>
    <div v-for="subtask in getSubtasksByTask(task)" :key="subtask.id">
        <SubtaskItem :subtask="subtask" />
    </div>
</template>

<style scoped>

</style>