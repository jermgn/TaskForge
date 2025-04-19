import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { SubTask } from '../types/SubTask';

export const useSubTaskStore = defineStore('subtasks', () => {

    const subtasks = ref<SubTask[]>([]);

    const addSubtask = (subtask: SubTask) => {
        subtasks.value.push(subtask);
    };

    const removeSubtask = (id: string) => {
        subtasks.value = subtasks.value.filter(s => s.id !== id);
    };

    const allSubtasks = computed(() => subtasks.value);

    return {
        addSubtask,
        removeSubtask,
        allSubtasks,
    };
});