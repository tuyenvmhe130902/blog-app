import {createBrowserRouter} from "react-router-dom";
import React from "react";
import AuthComponent from "./auth/auth.component";
import UsersComponent from "./users/users.component";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthComponent/>
    },
    {
        path: "/users",
        element: <UsersComponent/>
    }
])

export default router;