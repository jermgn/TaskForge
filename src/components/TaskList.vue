<script setup lang="ts">
import { useTaskStore } from '../stores/TaskStore';
import type { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';

const taskStore = useTaskStore();

const { addTask, allTasks } = taskStore;

const handleAddTask = () => {
  const newTask: Task = {
    id: uuidv4(),
    name: 'Nouvelle tâche',
    isCompleted: false,
    createdAt: new Date().toISOString(),
    listId: 'default-list-id',
  };

  addTask(newTask);
};
</script>

<template>
    <div v-for="task in allTasks">
        <p>{{ task }}</p>
    </div>
    <button @click="handleAddTask">Ajouter une tâche</button>
</template>

<style scoped>

</style>