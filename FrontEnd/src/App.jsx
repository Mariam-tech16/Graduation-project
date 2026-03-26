import "./App.css";
import AuthPage from "./components/AuthPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
let x = createBrowserRouter([

{path: '', element: <Layout /> , children:[
  {
    path: 'login',
    element: <Login />
  },
  { path: 'signup',
    element: <Signup />     
  },
  { path: 'auth',
    element: <AuthPage />
  },
  { path: 'Dashboard',
    element: <Dashboard />
  },
  { path: 'Home',
    element: <HomePage />
  },

]}


]);

function App() {
  return (
    <>
      <RouterProvider router={x} />
      {/* <RouterProvider router={x}> </RouterProvider> */}
    </>
  );
}

export default App;
