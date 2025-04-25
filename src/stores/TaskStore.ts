import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { TaskState } from '@/enums/TaskState';
import type { Task } from '@/types/Task';

export const useTaskStore = defineStore('tasks', () => {

    const tasks = ref<Task[]>([]);

    const addTask = (task: Task) => {
        tasks.value.push(task);
    };

    const removeTask = (id: string) => {
        tasks.value = tasks.value.filter(t => t.id !== id);
    };
    
    const toggleTaskState = (id: string) => {
        const task = tasks.value.find(t => t.id === id);
        if (task) {
            task.state = task.state === TaskState.COMPLETED ? TaskState.TODO : TaskState.COMPLETED;
        }
    };

    const getTasks = computed(() => tasks.value);

    const newTask1: Task = {
        id: "default-task-id",
        name: 'Nouvelle tâche 1',
        state: TaskState.TODO,
        createdAt: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        listId: 'default-list-id'
    };

    addTask(newTask1);

    const newTask2: Task = {
        id: uuidv4(),
        name: 'Nouvelle tâche 2',
        state: TaskState.COMPLETED,
        createdAt: new Date().toISOString(),
        dueDate: new Date().toISOString(),
        listId: 'default-list-id',
    };

    addTask(newTask2);

    return {
        tasks,
        addTask,
        removeTask,
        toggleTaskState,
        getTasks,
    };
});