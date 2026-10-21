import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route element={<MainLayout />}>
                <Route
                path="/home"
                element={<Home />}
                />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes