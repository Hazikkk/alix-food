import React from 'react';
import ReactDOM  from 'react-dom/client';

import {createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';
import Header from './components/Header';
import RestaurantCards from './components/RestauranCards'
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import About from './components/About';
import Contact from  './components/Contact';
import Error from './components/Error';

const AppLayout = () =>{
    return(
        <div className='App'>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element : <AppLayout/>,
      
        children: [
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
                
            }
        ],
        errorElement:<Error/>, 
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>)