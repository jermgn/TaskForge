<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';
import SubtaskList from '@/components/SubtaskList.vue';
import { TaskState } from '@/enums/TaskState';
import type { Task } from '@/types/Task';

const props = defineProps<{
    task: Task,
}>();

const taskStore = useTaskStore();
const isOpen = ref(false);

const toggleTaskState = () => {
    taskStore.toggleTaskState(props.task.id);
};

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
        @change="toggleTaskState"
        />
        <label :for="`${task.id}`">{{ task.name }}</label>
        <button @click="toggleOpen">{{ isOpen ? 'v' : '>' }}</button>
    </div>
    <SubtaskList v-if="isOpen" :task="task" />
</template>

<style scoped>

</style>