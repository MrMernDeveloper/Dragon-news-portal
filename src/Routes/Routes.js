import { createBrowserRouter } from "react-router-dom";
import Category from "../Category/Category";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import News from "../News/News";
import Profile from "../Others/Profile/Profile";
import TermsAndCondition from "../Shared/Others/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')

            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>,
               
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>,
              
            },
            {
                path: '/login',
                element: <Login></Login>
                
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile></Profile></PrivateRoute>
            }
        
        ]
}
])
