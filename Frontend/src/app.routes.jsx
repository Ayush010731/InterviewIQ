import { createBrowserRouter } from "react-router"
import Landing from "./features/landing/pages/landing";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Dashboard from "./features/interview/pages/Dashboard.jsx";
import Interview from "./features/interview/pages/Interview.jsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
   {
    path: "/dashboard",
    element: (
        <Protected>
            <Dashboard />
        </Protected>
    )
},
    {
        path:"/interview/:interviewId",
        element: <Protected><Interview /></Protected>
    }
])