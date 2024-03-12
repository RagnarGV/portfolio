import "./gbshseStudentReg.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gbhsheStudentReg from "./ProjectImages/GBSHSE-School-Registration-Portal.png";
import gbhsheStudentReg1 from "./ProjectImages/GBSHSE-School-Registration-Portal (1).png";
import gbhsheStudentReg2 from "./ProjectImages/GBSHSE-School-Registration-Portal (2).png";
import gbhsheStudentReg3 from "./ProjectImages/GBSHSE-School-Registration-Portal (3).png";
import gbhsheStudentReg4 from "./ProjectImages/GBSHSE-School-Registration-Portal (4).png";
import gbhsheStudentReg5 from "./ProjectImages/GBSHSE-School-Registration-Portal (5).png";
import gbhsheStudentReg6 from "./ProjectImages/GBSHSE-School-Registration-Portal (6).png";
import AnimatedCursorM from "../../Layouts/Animated_cursor";
export function GbhsheStudentReg() {
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
                Gbshse Student Registration Portal
              </span>
            </h1>
            <h3 className="mb-4 text-2xl ">
              <span className="text-gray-400 italic bg-clip-text ">
                Angular, BootStrap, PHP, RESTful APIs, AWS EC2
              </span>
            </h3>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              An Internal website for GBSHSE. This system is a complete
              registration solution for faculties and student. Monitoring
              Registration student details, status and payment information from
              one Place{" "}
            </p>
          </div>
        </div>
        <div className="sm:grid transition-all ease-in duration-900 grid-cols-3 gap-4 right-0">
          <div className="col-span-2">
            <img className="mb-3" src={gbhsheStudentReg} alt="" />
            <img className="mb-3" src={gbhsheStudentReg1} alt="" />
            <img className="mb-3" src={gbhsheStudentReg2} alt="" />
            <img className="mb-3" src={gbhsheStudentReg3} alt="" />
            <img className="mb-3" src={gbhsheStudentReg4} alt="" />
            <img className="mb-3" src={gbhsheStudentReg5} alt="" />
            <img className="mb-3" src={gbhsheStudentReg6} alt="" />
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
                    Gbshse Student Registration Portal
                  </span>
                </h1>
                <h3 className="mb-4 text-2xl ">
                  <span className="text-gray-400 italic bg-clip-text ">
                    Angular, BootStrap, PHP, RESTful APIs, AWS EC2
                  </span>
                </h3>
                <p className=" text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  An Internal website for GBSHSE. This system is a complete
                  registration solution for faculties and student. Monitoring
                  Registration student details, status and payment information
                  from one place{" "}
                </p>
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

export default GbhsheStudentReg;
