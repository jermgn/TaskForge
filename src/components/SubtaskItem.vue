<script setup lang="ts">
import { useSubtaskStore } from '@/stores/SubtaskStore';
import type { Subtask } from '@/types/Subtask';

const props = defineProps<{
    subtask: Subtask,
}>();

const subtaskStore = useSubtaskStore();

const toggleSubtask = () => {
    subtaskStore.toggleSubtask(props.subtask.id);
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
        <label
        :for="`${subtask.id}`"
        :class="{ completed : subtask.isCompleted === true }"
        >
            {{ subtask.name }}
        </label>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>