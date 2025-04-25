<script setup lang="ts">
import { useSubTaskStore } from '@/stores/SubTaskStore';
import type { SubTask } from '@/types/SubTask';

const props = defineProps<{
    subtask: SubTask,
}>();

const subTaskStore = useSubTaskStore();

const toggleSubtask = () => {
    subTaskStore.toggleSubtask(props.subtask.id);
};
</script>

<template>
    <div>
        <input
        type="checkbox"
        :id="`${subtask.id}`"
        :checked="subtask.isCompleted"
        @change="toggleSubtask"
        />
        <label :for="`${subtask.id}`">{{ subtask.name }}</label>
    </div>
</template>

<style scoped>

</style>