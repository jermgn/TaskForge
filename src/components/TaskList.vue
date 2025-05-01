<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue';
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore();
const { getTasks } = taskStore;
</script>

<template>
    <div v-for="task in getTasks" :key="task.id">
        <TaskItem :task="task" />
    </div>
</template>

<style scoped>

</style>