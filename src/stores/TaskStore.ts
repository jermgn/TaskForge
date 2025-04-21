import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';

export const useTaskStore = defineStore('tasks', () => {

    const tasks = ref<Task[]>([]);

    const addTask = (task: Task) => {
        tasks.value.push(task);
    };

    const removeTask = (id: string) => {
        tasks.value = tasks.value.filter(t => t.id !== id);
    };

    const toggleTask = (id: string) => {
        const task = tasks.value.find(t => t.id === id);
        if (task) task.isCompleted = !task.isCompleted;
    };

    const getTasks = computed(() => tasks.value);

    const newTask: Task = {
        id: uuidv4(),
        name: 'Nouvelle tâche 1',
        isCompleted: false,
        createdAt: new Date().toISOString(),
        listId: 'default-list-id',
    };
      
    addTask(newTask);

    return {
        tasks,
        addTask,
        removeTask,
        toggleTask,
        getTasks,
    };
});