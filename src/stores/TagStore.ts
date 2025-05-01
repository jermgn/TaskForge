import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Tag } from '@/types/Tag';
import { mockTags } from '@/mocks';
import type { Task } from '@/types/Task';

export const useTagStore = defineStore('tags', () => {

    const tags = ref<Tag[]>(mockTags);

    const addTag = (tag: Tag) => {
        tags.value.push(tag);
    };

    const removeTag = (id: string) => {
        tags.value = tags.value.filter(t => t.id !== id);
    };

    const getTagsByTask = (task: Task) => {
        return tags.value.filter(tag => task.tagIds?.includes(tag.id));
    };
    
    const getTags = computed(() => tags.value);

    return {
        addTag,
        removeTag,
        getTagsByTask,
        getTags,
    };
});
