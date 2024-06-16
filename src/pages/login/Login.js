import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginFrom from './LoginFrom'
import LoginCreate from './LoginCreate'
import LoginPasswordReset from './LoginPasswordReset'
import LoginPasswordLost from './LoginPasswordLost'

const Login = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginFrom />} />
            <Route path='/criar' element={<LoginCreate />} />
            <Route path='/perdeu' element={<LoginPasswordLost />} />
            <Route path='/resetar' element={<LoginPasswordReset />} />
        </Routes>
    )
}

export default Login