import axios from 'axios'

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}
export type TaskType ={
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type UpdateTaskType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        withCredentials: true,
        headers: {
            'API-KEY': '5835496f-e51a-452d-a3a0-e64dd670b3f1',
        },
    }
)

export const todolistAPI = {
    getTodolist() {
        const promise = instance.get<TodolistType[]>(
            'todo-lists',
        )
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>(
            'todo-lists',
            {title: title},
        )
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(
            `todo-lists/${todolistId}`,
        )
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(
            `todo-lists/${todolistId}`,
            {title: title},
        )
        return promise
    },
    getTasks(id: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${id}/tasks`)
    },
    deleteTasks(id: string, taskId: string){
        return instance.delete<ResponseType>(`todo-lists/${id}/tasks/${taskId}`)
    }
    // updateTasks(id: string, taskId: string, modal: UpdateTaskType) {
    //     return instance
    // }
}