<script setup lang="ts">
import { useTaskStore } from '../stores/TaskStore';

const taskStore = useTaskStore();

const { getTasks } = taskStore;
</script>

<template>
    <div v-for="task in getTasks">
        <p>{{ task }}</p>
    </div>
</template>

<style scoped>

</style>