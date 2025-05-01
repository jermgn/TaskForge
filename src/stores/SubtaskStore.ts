import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Subtask } from '@/types/Subtask';
import { mockSubtasks } from '@/mocks';
import type { Task } from '@/types/Task';

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

    const getSubtasksByTask = (task: Task) => {
        return subtasks.value.filter(subtask => task.subtaskIds?.includes(subtask.id));
    };

    return {
        addSubtask,
        removeSubtask,
        toggleSubtask,
        getSubtasksByTask,
    };
});