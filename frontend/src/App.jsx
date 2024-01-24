import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme";
import Root from "./pages/Root";
import Home from "./pages/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Appointment", element: <Appointment /> },
      { path: "/About", element: <Aboutme /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Services", element: <Services /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
