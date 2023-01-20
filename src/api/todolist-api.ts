import axios from 'axios'

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


type ResponseType<T> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
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
        const promise = instance.delete<ResponseType<{}>>(
            `todo-lists/${todolistId}`,
        )
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(
            `todo-lists/${todolistId}`,
            {title: title},
        )
        return promise
    }
}