import { Color } from "@/enums/Color";
import type { Tag } from "@/types/Tag";

export const mockTags: Tag[] = [
    {
        id: "tag-urgent",
        label: "Urgent",
        color: Color.RED,
    },
    {
        id: "tag-home",
        label: "Home",
        color: Color.YELLOW,
    },
    {
        id: "tag-work",
        label: "Work",
        color: Color.PURPLE,
    }
];