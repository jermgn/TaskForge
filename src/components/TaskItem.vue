<script setup lang="ts">
import { ref } from 'vue';
import SubtaskList from '@/components/SubtaskList.vue';
import { useTaskStore } from '@/stores/TaskStore';
import { TaskState } from '@/enums/TaskState';
import type { Task } from '@/types/Task';

defineProps<{
    task: Task,
}>();

const taskStore = useTaskStore();
const { toggleTaskState } = taskStore;

const isOpen = ref(false);

const toggleOpen = () => {
    isOpen.value = !isOpen.value
};
</script>

<template>
    <div>
        <input
        type="checkbox"
        :id="`${task.id}`"
        :checked="task.state === TaskState.COMPLETED"
        @change="() => toggleTaskState(task.id)"
        />
        <label
        :for="`${task.id}`"
        :class="{ completed : task.state === TaskState.COMPLETED }"
        >
            {{ task.name }}
        </label>
        <button @click="toggleOpen">{{ isOpen ? 'v' : '>' }}</button>
    </div>
    <div v-if="isOpen">
        <p>{{ task.description }}</p>
        <SubtaskList :task="task" />
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>