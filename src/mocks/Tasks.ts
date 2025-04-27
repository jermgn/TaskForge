import { TaskPriority } from "@/enums/TaskPriority";
import { TaskState } from "@/enums/TaskState";
import type { Task } from "@/types/Task";

export const mockTasks: Task[] = [
    {
        id: "task-1",
        name: "Finish project report",
        description: "Prepare the final report for the client project.",
        state: TaskState.TODO,
        priority: TaskPriority.HIGH,
        createdAt: new Date().toISOString(),
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        listId: "list-1",
        tagIds: ["tag-urgent", "tag-work"],
        subtaskIds: ["subtask-1", "subtask-2"]
    },
    {
        id: "task-2",
        name: "Weekend shopping",
        description: "Buy all the necessary groceries for the week.",
        state: TaskState.IN_PROGRESS,
        priority: TaskPriority.MEDIUM,
        createdAt: new Date().toISOString(),
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        listId: "list-2",
        tagIds: ["tag-home"],
        subtaskIds: ["subtask-3"]
    },
    {
        id: "task-3",
        name: "Book dentist appointment",
        state: TaskState.COMPLETED,
        priority: TaskPriority.LOW,
        createdAt: new Date().toISOString(),
        listId: "list-2",
        tagIds: [],
        subtaskIds: []
    }
];