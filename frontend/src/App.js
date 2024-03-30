import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Components/RootLayout/RootLayout';
import  Addcourse from './Components/Addcourse/Addcourse';
import Home from './Components/Home/Home';
import  Allcourses from './Components/Allcourses/Allcourses';
import Coursedetails from './Components/Coursedetails/Coursedetails';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/courses',
          element: < Addcourse />,
        },
        {
          path: '/allcourses',
          element: < Allcourses />,
        },
        {
          path:'/allcourses/:courseid',
         element:<Coursedetails/>
        }
     
       
      ],
    },
  ]); 

  return (
    <div className="App">
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
