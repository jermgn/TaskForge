import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Subtask } from '@/types/Subtask';
import { mockSubtasks } from '@/mocks';

export const useSubtaskStore = defineStore('subtasks', () => {

    const subtasks = ref<Subtask[]>(mockSubtasks);

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

    return {
        addSubtask,
        removeSubtask,
        toggleSubtask,
        getSubtasksByTaskId,
    };
});