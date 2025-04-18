export interface Task {
    id: string
    name: string
    description?: string
    isCompleted: boolean
    createdAt: string
    dueDate?: string
    listId: string
}