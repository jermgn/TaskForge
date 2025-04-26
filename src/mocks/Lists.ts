import { Color } from "@/enums/Color";
import type { List } from "@/types/List";

export const mockLists: List[] = [
    {
        id: "list-1",
        name: "Work",
        createdAt: new Date().toISOString(),
        color: Color.BLUE,
    },
    {
        id: "list-2",
        name: "Personal",
        createdAt: new Date().toISOString(),
        color: Color.GREEN,
    }
];