import "./gamestop.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gamestop1 from "./ProjectImages/GameStop (1).png";
import gamestop2 from "./ProjectImages/GameStop (2).png";
import gamestop3 from "./ProjectImages/GameStop (3).png";
import gamestop4 from "./ProjectImages/GameStop (4).png";
import gamestop5 from "./ProjectImages/GameStop (5).png";
import gamestop6 from "./ProjectImages/GameStop (6).png";
import AnimatedCursorM from "../../Layouts/Animated_cursor";

export function Gamestop() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  setTimeout(() => {
    onLoad();
  }, 100);
  function back() {
    fullPageTrans(-1);
  }
  function fullPageTrans(link) {
    let pageTrans1 = document.getElementById("pageTrans1");
    let pageTrans2 = document.getElementById("pageTrans2");
    let pageTrans3 = document.getElementById("pageTrans3");
    setTimeout(() => {
      pageTrans1.classList.add("w-1/4");
    }, 200);
    setTimeout(() => {
      pageTrans2.classList.add("w-3/4");
    }, 300);
    setTimeout(() => {
      pageTrans3.classList.add("w-full");
    }, 500);
    setTimeout(() => {
      navigate(link);
    }, 700);
    setTimeout(() => {
      pageTrans1.classList.remove("w-1/4");
      pageTrans2.classList.remove("w-3/4");
      pageTrans3.classList.remove("w-full");
    }, 800);
  }
  return (
    <>
      <AnimatedCursorM className="hidden sm:block" />
      <body
        id="body"
        className="dark  ease-in-out duration-500 scroll-smooth Comfortaa"
      >
        <div className="sm:hidden bg-slate-950 shadow-2xl">
          <button
            onClick={() => back()}
            className="bg-white rounded-full text-2xl w-10 h-10 hover:scale-125 transition ease-in-out duration-500 ml-5 mb-20"
          >
            <i class="las la-arrow-left text-3xl"></i>
          </button>
          <div className="m-5">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                GameStop
              </span>
            </h1>
            <h3 className="mb-4 text-2xl ">
              <span className="text-gray-400 italic bg-clip-text ">
                Angular, HTML, CSSs, and BootStrap
              </span>
            </h3>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              GameStop website. Focused on user-centric design, it aims to
              provide tailored recommendations, seamless navigation, and
              interactive features to enhance every gamer's shopping adventure.
              Join me in creating a platform that revolutionizes how enthusiasts
              discover and engage with their favorite titles.
            </p>
            <a href="https://game-stop-sigma.vercel.app/home" target="_blank">
              <button className="bg-white rounded-md text-xl font-bold w-24 h-10 hover:scale-110 transition ease-in-out duration-500 mt-8">
                Visit
              </button>
            </a>
          </div>
        </div>
        <div className="sm:grid transition-all ease-in duration-900 grid-cols-3 gap-4 right-0">
          <div className="col-span-2">
            <img className="mb-3" src={gamestop1} alt="" />
            <img className="mb-3" src={gamestop2} alt="" />
            <img className="mb-3" src={gamestop3} alt="" />
            <img className="mb-3" src={gamestop4} alt="" />
            <img className="mb-3" src={gamestop5} alt="" />
            <img className="mb-3" src={gamestop6} alt="" />
          </div>
          <div
            id="sidebar"
            className="hidden sm:block bg-slate-950 col-span-1 pt-8 h-lvh transition-all ease-in duration-900 w-3/4 right-0 shadow-2xl"
          >
            <div className="fixed">
              <button
                onClick={() => back()}
                className="bg-white rounded-full text-lg w-10 h-10 hover:scale-150 transition ease-in-out duration-500 ml-5 mb-20"
              >
                <i class="las la-arrow-left text-3xl"></i>
              </button>
              <div className="m-5">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900  dark:text-white md:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    GameStop
                  </span>
                </h1>
                <h3 className="mb-4 text-2xl ">
                  <span className="text-gray-400 italic bg-clip-text ">
                    Angular, HTML, CSSs, and BootStrap
                  </span>
                </h3>
                <p className=" text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  GameStop website. Focused on user-centric design, it aims to
                  provide tailored recommendations, seamless navigation, and
                  interactive features to enhance every gamer's shopping
                  adventure. Join me in creating a platform that revolutionizes
                  how enthusiasts discover and engage with their favorite
                  titles.
                </p>
                <a
                  href="https://game-stop-sigma.vercel.app/home"
                  target="_blank"
                >
                  <button className="bg-white rounded-md text-xl font-bold w-24 h-10 hover:scale-110 transition ease-in-out duration-500 mt-8">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
  function onLoad() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.add("w-full");
  }
}

export default Gamestop;
