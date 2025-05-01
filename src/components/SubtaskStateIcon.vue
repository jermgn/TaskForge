<script setup lang="ts">
import type { Subtask } from '@/types/Subtask';

defineProps<{
    subtask: Subtask,
}>();
</script>

<template>
    <div v-if="subtask.isCompleted" class="subtask-icon">
        <svg class="subtask-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C18.5647 24 24 18.5529 24 12C24 5.43529 18.5529 0 11.9882 0C5.43529 0 0 5.43529 0 12C0 18.5529 5.44705 24 12 24ZM12 22C6.44705 22 2.01176 17.5529 2.01176 12C2.01176 6.44705 6.43529 2 11.9882 2C17.5411 2 22 6.44705 22 12C22 17.5529 17.5529 22 12 22Z" fill="#2F2D2B"/>
            <path d="M12.0117 15.6C13.9881 15.6 15.6235 13.9765 15.6235 11.9882C15.6235 9.99998 13.9881 8.37645 12.0117 8.37645C10.0235 8.37645 8.38818 9.99998 8.38818 11.9882C8.38818 13.9765 10.0235 15.6 12.0117 15.6Z" fill="#2F2D2B"/>
        </svg>
    </div>
    <div v-else class="subtask-icon">
        <svg class="subtask-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C18.5647 24 24 18.5529 24 12C24 5.43529 18.5529 0 11.9882 0C5.43529 0 0 5.43529 0 12C0 18.5529 5.44705 24 12 24ZM12 22C6.44705 22 2.01176 17.5529 2.01176 12C2.01176 6.44705 6.43529 2 11.9882 2C17.5411 2 22 6.44705 22 12C22 17.5529 17.5529 22 12 22Z" fill="#2F2D2B"/>
        </svg>
    </div>
</template>

<style scoped lang="scss">
.subtask {
    &-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &-svg {
            width: 24px;
            height: 24px;
        }
    }
}
</style>