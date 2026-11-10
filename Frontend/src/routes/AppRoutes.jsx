import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import MainLayout from '../layouts/MainLayout'
import ProtectedRoute from './ProtectedRoute'

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

            <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                    <Route
                    path="/home"
                    element={<Home />}
                    />
                </Route>
                    
                <Route 
                    path="/dashboard"
                    element={<Dashboard />}
                />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
