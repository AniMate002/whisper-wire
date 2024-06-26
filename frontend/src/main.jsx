import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpPage from './pages/SignUpPage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import HomePage from './pages/HomePage.jsx';
import { AuthConextProvider } from './context/AuthContext.jsx';
import SocketContextProvider from './context/SocketContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/login",
    element: <LogInPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthConextProvider>
    <SocketContextProvider>
      <RouterProvider router={router} />
    </SocketContextProvider>
  </AuthConextProvider>
)
