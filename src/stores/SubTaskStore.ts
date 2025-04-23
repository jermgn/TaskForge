import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { SubTask } from '../types/SubTask';
import { v4 as uuidv4 } from 'uuid';

export const useSubTaskStore = defineStore('subtasks', () => {

    const subtasks = ref<SubTask[]>([]);

    const addSubtask = (subtask: SubTask) => {
        subtasks.value.push(subtask);
    };

    const removeSubtask = (id: string) => {
        subtasks.value = subtasks.value.filter(s => s.id !== id);
    };

    const toggleSubtask = (id: string) => {
        const subtask = subtasks.value.find(s => s.id === id);
        if (subtask) subtask.isCompleted = !subtask.isCompleted;
    };

    const getSubtasksByTaskId = (taskId: string) => {
        return subtasks.value.filter(subtask => subtask.taskId === taskId);
    };

    const getSubtasks = computed(() => subtasks.value);

    const newSubtask1: SubTask = {
        id: uuidv4(),
        name: "Nouvelle sous-tâche 1",
        isCompleted: false,
        taskId: "default-task-id",
    };

    addSubtask(newSubtask1);

    const newSubtask2: SubTask = {
        id: uuidv4(),
        name: "Nouvelle sous-tâche 2",
        isCompleted: true,
        taskId: "default-task-id",
    };

    addSubtask(newSubtask2);

    return {
        addSubtask,
        removeSubtask,
        toggleSubtask,
        getSubtasksByTaskId,
        getSubtasks,
    };
});