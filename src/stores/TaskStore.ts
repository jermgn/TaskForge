import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { TaskState } from '@/enums/TaskState';
import type { Task } from '@/types/Task';
import { mockTasks } from '@/mocks';

export const useTaskStore = defineStore('tasks', () => {

    const tasks = ref<Task[]>(mockTasks);

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
    
    return {
        tasks,
        addTask,
        removeTask,
        toggleTaskState,
        getTasks,
    };
});