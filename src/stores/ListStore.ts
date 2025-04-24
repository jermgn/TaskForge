import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { List } from '@types/List';
import { Color } from '@enums/Color';

export const useListStore = defineStore('lists', () => {

    const lists = ref<List[]>([]);

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

    const newList: List = {
        id: "default-list-id",
        name: "",
        createdAt: new Date().toISOString(),
        color: Color.BLUE,
    };

    addList(newList);

    return {
        lists,
        addList,
        removeList,
        getListById,
        getLists,
    };
});