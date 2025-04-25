import type { TaskState } from "@/enums/TaskState"

export interface Task {
    id: string
    name: string
    description?: string
    state: TaskState
    createdAt: string
    dueDate: string
    listId: string
    tagIds?: string[]
}