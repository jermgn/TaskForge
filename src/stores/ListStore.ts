import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { List } from '@/types/List';
import { Color } from '@/enums/Color';
import { mockLists } from '@/mocks';

export const useListStore = defineStore('lists', () => {

    const lists = ref<List[]>(mockLists);

    const addList = (list: List) => {
        lists.value.push(list);
    };

    const removeList = (id: string) => {
        lists.value = lists.value.filter(l => l.id !== id);
    };

    const getListById = (id: string) => {
        return lists.value.find(l => l.id === id);
    };

    const getLists = computed(() => lists.value);
    
    return {
        lists,
        addList,
        removeList,
        getListById,
        getLists,
    };
});