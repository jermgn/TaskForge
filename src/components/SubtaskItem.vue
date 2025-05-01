<script setup lang="ts">
import { useSubtaskStore } from '@/stores/SubtaskStore';
import type { Subtask } from '@/types/Subtask';
import SubtaskStateIcon from './SubtaskStateIcon.vue';

defineProps<{
    subtask: Subtask,
}>();

const subtaskStore = useSubtaskStore();
const { toggleSubtask } = subtaskStore;
</script>

<template>
    <div class="subtask">
        <SubtaskStateIcon @click="toggleSubtask(subtask.id)" :subtask="subtask" />

        <label :class="{ completed : subtask.isCompleted === true }">
            {{ subtask.name }}
        </label>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>