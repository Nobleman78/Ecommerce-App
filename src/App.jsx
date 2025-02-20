import './App.css'
import Header from './components/Header/Header'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Root from './components/Root/Root';
import About from './components/Pages/About';
import Groceries from './components/Pages/Groceries';
import Blog from './components/Pages/Blog';
import Fashion from './components/Pages/Fashion';
import Contact from './components/Pages/Contact';
import Shop from './components/Pages/Shop';
import Electronics from './components/Pages/Electronics';
import ContextProvider from './components/ContextProvider/ContextProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'groceries',
        element: <Groceries></Groceries>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'fashion',
        element: <Fashion></Fashion>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'shop',
        element: <Shop></Shop>
      },
      {
        path: 'electronics',
        element: <Electronics></Electronics>
      }

    ]
  },
]);

function App() {

  return (
    <div>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>

    </div>
  )
}

export default App
