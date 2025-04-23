<script setup lang="ts">
import { useTaskStore } from '../stores/TaskStore';
import TaskItem from './TaskItem.vue';

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