<script setup lang="ts">
import { useTaskStore } from '../stores/TaskStore';
import { computed } from 'vue';
import type { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';

const taskStore = useTaskStore();

const tasks = computed(() => taskStore.tasks);

const addTask = () => {
  const newTask: Task = {
    id: uuidv4(),
    name: 'Nouvelle tâche',
    isCompleted: false,
    createdAt: new Date().toISOString(),
    listId: 'default-list-id',
  };

  taskStore.addTask(newTask);
};
</script>

<template>
    <div v-for="task in tasks">
        <p>{{ task }}</p>
    </div>
    <button @click="addTask">Ajouter une tâche</button>
</template>

<style scoped>

</style>