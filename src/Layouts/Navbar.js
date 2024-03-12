import React from "react";
import { HashLink } from "react-router-hash-link";
import "../Pages/styles.css";
import {
  Navbar,
  Typography,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Slide } from "react-awesome-reveal";

// nav list component
const navListItems = [
  {
    label: "Projects",
    icon: UserCircleIcon,
    link: "#ProjectSection",
  },
  {
    label: "About",
    icon: CubeTransparentIcon,
    link: "#AboutSection",
  },
  {
    label: "Contact",
    icon: CodeBracketSquareIcon,
    link: "#ContactSection",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-white"
        >
          <HashLink to={link}>
            <MenuItem className="flex items-center text-lg font-DotGothic16 gap-2 lg:rounded-full hover:bg-blue-gray-800">
              {React.createElement(icon, {
                className: "h-[18px] w-[18px] text-white",
              })}{" "}
              <span className="text-white"> {label}</span>
            </MenuItem>
          </HashLink>
        </Typography>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className="mx-auto p-2 lg:pl-6 bg-gray-900">
      <Slide direction="down">
        <Navbar className="mx-auto p-2 lg:rounded-full lg:pl-6 backdrop-blur-2xl backdrop-opacity-100 bg-opacity-50 bg-gray-800">
          <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
            <div className="hidden lg:block  mx-auto text-xl">
              <NavList />
            </div>
            <IconButton
              size="sm"
              color="blue-gray"
              variant="text"
              onClick={toggleIsNavOpen}
              className="ml-auto mr-2 lg:hidden "
            >
              <Bars2Icon className="h-6 w-6" />
            </IconButton>
          </div>
          <Collapse open={isNavOpen} className="overflow-scroll">
            <NavList />
          </Collapse>
        </Navbar>
      </Slide>
    </div>
  );
}
