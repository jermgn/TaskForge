import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Tag } from '../types/Tag';

export const useTagStore = defineStore('tags', () => {

    const tags = ref<Tag[]>([]);

    const addTag = (tag: Tag) => {
        tags.value.push(tag);
    };

    const removeTag = (id: string) => {
        tags.value = tags.value.filter(t => t.id !== id);
    };

    const allTags = computed(() => tags.value);

    return {
        tags,
        addTag,
        removeTag,
        allTags,
    };
});
