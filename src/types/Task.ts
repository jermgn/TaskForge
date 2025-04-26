import type { TaskState } from "@/enums/TaskState"
import type { TaskPriority } from "@/enums/TaskPriority"

export interface Task {
    id: string
    name: string
    description?: string
    state: TaskState
    priority?: TaskPriority
    createdAt: string
    dueDate?: string
    completedAt?: string
    listId?: string
    tagIds?: string[]
    subtaskIds?: string[]
}