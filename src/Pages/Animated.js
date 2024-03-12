import { Outlet } from "react-router-dom";
import "./styles.css";
import AnimatedPageClose from "../Layouts/Animated_PageClose";

export function Animated() {
  return (
    <>
      <html>
        <head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css"
            rel="stylesheet"
          />
        </head>
        <body id="nav" className="bg-transparent ease-in-out duration-500">
          <AnimatedPageClose />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
        </body>
      </html>
      <Outlet />
    </>
  );
}
export default Animated;
