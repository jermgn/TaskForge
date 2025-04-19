import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Task } from '../types/Task';

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

    const allTasks = computed(() => tasks.value);

    return {
        tasks,
        addTask,
        removeTask,
        toggleTask,
        allTasks,
    };
});