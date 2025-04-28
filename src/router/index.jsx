import About from "../pages/Abouts";
import Contact from "../pages/Contacts";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Services";

export const routes = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/project",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
