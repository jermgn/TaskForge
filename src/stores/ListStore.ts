import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { List } from '../types/List';

export const useListStore = defineStore('lists', () => {

    const lists = ref<List[]>([]);

    const addList = (list: List) => {
        lists.value.push(list);
    };

    const removeList = (id: string) => {
        lists.value = lists.value.filter(l => l.id !== id);
    };

    const getLists = computed(() => lists.value);

    return {
        lists,
        addList,
        removeList,
        getLists,
    };
});