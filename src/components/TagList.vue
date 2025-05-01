<script setup lang="ts">
import TagItem from './TagItem.vue';
import { useTagStore } from '@/stores/TagStore';
import type { Task } from '@/types/Task';

defineProps<{
    task: Task,
}>();

const tagStore = useTagStore();
const { getTagsByTask } = tagStore;

</script>

<template>
    <div v-for="tag in getTagsByTask(task)" :key="tag.id">
        <TagItem :tag="tag" />
    </div>
</template>

<style scoped>

</style>