import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./Component/Home.jsx";
import { About } from './Component/About.jsx';
import { Contact } from './Component/Contact.jsx';
import {AppLayout} from './Layout/AppLayout';
import { Login } from './Component/Login.jsx';
import  { Signup,signupData} from './Component/Signup.jsx';
import { Listings } from './Component/Listings.jsx';
import { PropertyDetails } from './api/propertyDetails.jsx';
import { PropertyBioData } from './Component/PropertyBioData.jsx';
import { PropertyList } from './Component/PropertyList.jsx';


function App() {
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/listings",
          element:<Listings/>,
          loader:PropertyDetails  
        },
        {

          path:"/property/:name",
          element:<PropertyBioData/>,
          loader:PropertyDetails


         },
         {
          path:"/listproperty",
          element:<PropertyList/>
         }

      ]

    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/Signup",
      element:<Signup/>,
      action:signupData

    }

   

]);
  

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
