import "./Home.css";
import "./styles.css";
import "animate.css";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Projects } from "./Projects";
import { ProjectsMob } from "./ProjectsMob";
import TextTransition, { presets } from "react-text-transition";
import { About } from "./About";
import { Contact } from "./Contact";
import { ComplexNavbar } from "../Layouts/Navbar";
import ScrollButton from "../Layouts/BackToTop";
import AnimatedCursorM from "../Layouts/Animated_cursor";
export const Home = () => {
  const TEXTS = ["I Design ", "I Develop "];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2200);
    return () => clearTimeout(intervalId);
  }, []);
  function goToTop() {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <>
      <AnimatedCursorM className="hidden sm:block" />
      <body id="body" className="ease-in-out duration-500 scroll-smooth">
        <ComplexNavbar />
        <section id="Introduction">
          <div className="bgimage h-screen bg-cover bg-no-repeat">
            <div className="mx-auto my-auto">
              <div className="container sm:pl-60 sm:pt-72">
                <h1 className="mb-4 block sm:hidden font-extrabold">
                  {" "}
                  <TypeAnimation
                    className="text-transparent  text-4xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
                    sequence={["Hi, my name is Gaurav Hariyani", 2000]}
                    wrapper="span"
                    speed={70}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>{" "}
                <h1 className="mb-4 hidden sm:block font-extrabold">
                  {" "}
                  <TypeAnimation
                    className="text-transparent hidden text-7xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
                    sequence={["Hi, my name is Gaurav Hariyani", 2000]}
                    wrapper="span"
                    speed={70}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>
                <h1 className="mb-4 text-3xl font-extrabold text-white">
                  <TextTransition
                    className="mx-3"
                    style={{ fontFamily: "Dancing Script" }}
                    inline
                    springConfig={presets.gentle}
                  >
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                  <TypeAnimation
                    sequence={[
                      "Frontend",
                      2000,
                      "Backend",
                      2000,
                      "APIs",
                      2000,
                      "Android Apps",
                      2000,
                    ]}
                    wrapper="span"
                    speed={70}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-Comfortaa">
                  Experienced Fullstack Developer proficient in frontend
                  technologies (HTML, CSS, JavaScript) , fontend frameworks
                  (React, Angular) and backend frameworks (e.g., Node.js, PHP).
                  Skilled in designing and optimizing databases, deploying
                  applications on cloud platforms, and implementing RESTful
                  APIs. Expert in version control (Git) and committed to
                  ensuring application security and reliability. Collaborative
                  team player with a track record of delivering scalable and
                  user-friendly web solutions. Passionate about staying current
                  with industry trends for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <button
          onClick={() => goToTop()}
          className="hidden sm:block hover:animate-bounce float-right h-10 w-16 m-auto bg-projectBlue rounded-b-2xl"
        >
          <i class="las la-angle-double-up text-4xl  mb-7 text-gray-500"></i>
        </button>
        {/* <a href={'/#ProjectSection'} ><button className='hidden sm:block hover:animate-bounce float-right h-20 w-16 mx-auto toTop rounded-2xl'>
                    <i class="las la-angle-double-down text-4xl mb-7 mx-auto text-gray-500"></i>
                </button>
                </a> */}
        <section
          className="hidden sm:block bgProjectimage bg-no-repeat bg-cover"
          name="ProjectSection"
          id="ProjectSection"
        >
          <Projects></Projects>
        </section>
        <section
          className="block sm:hidden bgProjectimage bg-no-repeat bg-cover"
          name="ProjectSection"
          id="ProjectSection"
        >
          <ProjectsMob></ProjectsMob>
        </section>
        <button
          onClick={() => goToTop()}
          className="hidden sm:block hover:animate-bounce float-right h-11 w-16 m-auto bg-AboutBlue rounded-b-2xl"
        >
          <i class="las la-angle-double-up text-4xl mb-7 text-gray-500"></i>
        </button>
        <a href={"/#AboutSection"}>
          <button className="hidden sm:block hover:animate-bounce float-right h-20 w-16 mx-auto toTopGray rounded-2xl">
            <i class="las la-angle-double-down text-4xl mb-7 text-gray-500"></i>
          </button>
        </a>
        <section
          className="bgAboutimage bg-no-repeat bg-cover"
          id="AboutSection"
        >
          <About></About>
        </section>
        <button
          onClick={() => goToTop()}
          className="hidden sm:block hover:animate-bounce float-right h-20 w-16 m-auto toTopGray950 rounded-2xl"
        >
          <i class="las la-angle-double-up text-4xl mb-7 text-gray-500"></i>
        </button>
        <section
          className="bgContactimage bg-no-repeat bg-cover"
          name="ContactSection"
          id="ContactSection"
        >
          <Contact></Contact>
        </section>
      </body>
    </>
  );
};
