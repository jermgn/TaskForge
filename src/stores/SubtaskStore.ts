import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Subtask } from '@/types/Subtask';
import { v4 as uuidv4 } from 'uuid';

export const useSubtaskStore = defineStore('subtasks', () => {

    const subtasks = ref<Subtask[]>([]);

    const addSubtask = (subtask: Subtask) => {
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

    const newSubtask1: Subtask = {
        id: uuidv4(),
        name: "Nouvelle sous-tâche 1",
        isCompleted: false,
        taskId: "default-task-id",
    };

    addSubtask(newSubtask1);

    const newSubtask2: Subtask = {
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
    };
});