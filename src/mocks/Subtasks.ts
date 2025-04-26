import type { Subtask } from "@/types/Subtask";

export const mockSubtasks: Subtask[] = [
    {
        id: "subtask-1",
        name: "Write documentation",
        isCompleted: false,
        taskId: "task-1",
    },
    {
        id: "subtask-2",
        name: "Fix login bug",
        isCompleted: true,
        taskId: "task-1",
    },
    {
        id: "subtask-3",
        name: "Buy groceries",
        isCompleted: false,
        taskId: "task-2",
    }
];