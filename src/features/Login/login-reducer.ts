

//initialState
import {Dispatch} from "redux";
import {SetAppErrorActionType, SetAppStatusActionType} from "../../app/app-reducer";

// const initialState: TasksStateType = {}



export const loginReducer = (state: any, action: ActionsType): any => {
    switch (action.type) {

        default:
            return state
    }
}

// actions
// export const removeTaskAC = (taskId: string, todolistId: string) =>
//     ({type: 'REMOVE-TASK', taskId, todolistId} as const)


// thunks
export const fetchTasksTC = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch) => {

}

// types

type ActionsType = any

type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>
