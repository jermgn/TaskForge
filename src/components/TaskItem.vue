<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore';
import SubTaskList from '@/components/SubTaskList.vue';
import { TaskState } from '@/enums/TaskState';
import type { Task } from '@/types/Task';

const props = defineProps<{
    task: Task,
}>();

const taskStore = useTaskStore();

const toggleTaskState = () => {
    taskStore.toggleTaskState(props.task.id);
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
    </div>
    <SubTaskList :task="task" />
</template>

<style scoped>

</style>