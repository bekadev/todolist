import React from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Menu } from '@mui/icons-material';
import {LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {RequestStatusType} from "./app-reducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "../features/Login/Login";

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {

    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)

    return (
        <BrowserRouter>
            <div className="App">
                <ErrorSnackbar />
                <AppBar position="static">
                    <Toolbar className='flex'>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <Menu/>
                        </IconButton>
                        <Button color="inherit">Login</Button>
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
        </BrowserRouter>
    )
}

export default App
