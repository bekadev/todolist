import React, {useCallback, useEffect} from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Menu } from '@mui/icons-material';
import {CircularProgress, LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch, useAppSelector} from "./store";
import {initializeAppTC, RequestStatusType} from "./app-reducer";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {logoutTC} from "../features/Login/auth-reducer";
import {TodolistsList} from "../features/TodolistsList/TodolistsList";
// props type
type PropsType = {
    demo?: boolean
}
// app base component
function App({demo = false}: PropsType) {

    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const initialized = useSelector<AppRootStateType, boolean>((state) => state.app.initialized)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])

    if (!initialized) {
        return <CircularProgress style={{position: 'fixed', top: '30%', left: '50%'}}/>
    }

    return (
        <HashRouter>
            <div className="App">
                <ErrorSnackbar />
                <AppBar position="static">
                    <Toolbar className='flex'>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <Menu/>
                        </IconButton>
                        {isLoggedIn &&<Button color="inherit" onClick={logoutHandler}>Log out</Button>}
                    </Toolbar>
                    { status === 'loading' && <LinearProgress /> }
                </AppBar>
                <Container fixed>
                    <Routes>
                        <Route path='/' element={ <TodolistsList demo={demo} /> }/>
                        <Route path='/login' element={ <Login/>}/>
                        <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>} />
                        {/*<Route path='*' element={<Navigate to='/404'}/>} />*/}
                    </Routes>
                </Container>
            </div>
        </HashRouter>
    )
}

export default App
