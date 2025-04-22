import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';
import { TaskState } from '../enums/TaskState';

export const useTaskStore = defineStore('tasks', () => {

    const tasks = ref<Task[]>([]);

    const addTask = (task: Task) => {
        tasks.value.push(task);
    };

    const removeTask = (id: string) => {
        tasks.value = tasks.value.filter(t => t.id !== id);
    };

    const getTasks = computed(() => tasks.value);

    const newTask: Task = {
        id: uuidv4(),
        name: 'Nouvelle tâche 1',
        state: TaskState.TODO,
        createdAt: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        listId: 'default-list-id',
    };
      
    addTask(newTask);

    return {
        tasks,
        addTask,
        removeTask,
        getTasks,
    };
});