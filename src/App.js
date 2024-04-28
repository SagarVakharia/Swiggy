import "./App.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, useSearchParams } from "react-router-dom";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from './components/Contact';
import Error from './components/Error';
import Menu from "./components/Menu";
import { lazy, Suspense, useState, useEffect } from "react";
import UserContext from "./utils/userContext";


const About = lazy(() => import('./components/About'))


const  App = () => {
  const [userName, setUserName] = useState();

  //hardcoding authentication to update UserContext value
  useEffect(() => {
    const data = {
      name: "JoyBoy",
    };
    setUserName(data.name)
  },[])

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
    ],
      errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter} />
);


export default App;
