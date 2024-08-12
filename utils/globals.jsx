import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export const NAVBAR_REM_HEIGHT = 4;
export const Links = [{
    link: "/About",
    name: "About",
    element: <About/>
},
{
    link: "/Contact",
    name: "Contact",
    element: <Contact/>
},
{
    link: "/Resume",
    name: "Resume",
    element: <Resume/>
},
{
    link: "/Projects",
    name: "Projects",
    element: <Projects/>
},
] 