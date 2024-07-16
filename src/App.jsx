import Home from './Router/home/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './Router/layout/layout';
import List from './Router/list/List';
import Single from './Router/single/Single';
import Profile from './Router/profile/Profile';


function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[

      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/list',
        element:<List/>
      },
      {
        path:'/:id',
        element:<Single/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ]    
  }
])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
