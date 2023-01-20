//free@samuraijs.com
//free


import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistAPI} from '../api/todolist-api';

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '5835496f-e51a-452d-a3a0-e64dd670b3f1'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI
            .getTodolist()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'newTodolist'
        todolistAPI
            .createTodolist('newTodolist')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '859f13d1-91d0-4c50-8463-fb83d5d98bba';
        todolistAPI
            .deleteTodolist(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todolistId}`)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0f677125-5886-4777-96a6-25d9bd9562f2'
        todolistAPI
            .updateTodolist(todolistId, 'SOME NEW TITLE')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
