import "./Projects.css";
import "./styles.css";
import "animate.css";
import Tilt from "react-parallax-tilt";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
export const Projects = () => {
  const navigate = useNavigate();
  function click(cardNumber) {
    let hid1 = document.getElementById("d" + cardNumber + "h1");
    let hid2 = document.getElementById("d" + cardNumber + "h2");
    let link = undefined;
    if (cardNumber === 1) {
      link = "projects/gbshse";
    } else if (cardNumber === 2) {
      link = "projects/gbshseAp";
    } else if (cardNumber === 3) {
      link = "projects/spotify";
    } else if (cardNumber === 4) {
      link = "projects/gamestop";
    } else if (cardNumber === 5) {
      link = "projects/gbshse-student-registration";
    }

    setTimeout(() => {
      hid1.classList.remove("w-0");
      hid1.classList.add("w-full");
      hid2.classList.remove("w-0");
      hid2.classList.add("w-40");
    }, 100);
    setTimeout(() => {
      hid1.classList.remove("right-0.5");
      hid1.classList.add("left-0.5");
      hid2.classList.remove("w-40");
      hid2.classList.add("w-0");
      hid1.classList.remove("w-full");
      hid1.classList.add("w-0");
    }, 300);
    setTimeout(() => {
      hid2.classList.remove("right-0.5");
      hid2.classList.add("left-0.5");
      hid2.classList.remove("w-40");
      hid2.classList.add("w-0");
    }, 400);
    setTimeout(() => {
      hid1.classList.add("right-0.5");
      hid2.classList.add("right-0.5");
      hid1.classList.remove("left-0.5");
      hid2.classList.remove("left-0.5");
      fullPageTrans(link);
    }, 500);
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
      <section id="ProjectSection" name="ProjectSection" className="sm:py-40 ">
        <div className=" hidden sm:block mx-auto absolute  opacity-40">
          <h3 className="text-gray-400 text-9xl font-bold font-Comfortaa">
            PROJECTS
          </h3>
        </div>
        <div className="block sm:hidden mx-auto absolute  opacity-40">
          <h3 className="text-gray-400 text-5xl font-bold font-Comfortaa">
            PROJECTS
          </h3>
        </div>
        <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 sm:grid-flow-row gap-4 p-20">
          <div
            onClick={() => click(1)}
            className="sm:row-span-2 sm:card-text container max-w-sm mx-auto pt-20 sm:pt-0 sm:mt-40 cursor-pointer"
          >
            <Slide triggerOnce duration={500} direction="right">
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className="card1 card-text bg-no-repeat bg-cover block shadow-2xl-all rounded-lg"
              >
                <div
                  id="d1h1"
                  className="mb-40 bg-gray-100 h-full absolute  transition-all ease-in duration-1000 right-0.5 w-0  rounded-lg"
                ></div>

                <div className="card-text p-6">
                  \
                  <div
                    id="line"
                    className="lg:w-36 bg-gray-100 absolute ml-24 mt-20 mr-72 h-1  transition-all ease-in duration-1000 right-0.5 translate w-0"
                  ></div>
                  <Slide triggerOnce duration={800}>
                    <div className="lg:pr-60 flex justify-center">
                      <div
                        id="d1h2"
                        className="bg-gray-100 mr-72 h-16 absolute  transition-all ease-in duration-1000 right-0.5 translate w-0"
                      ></div>
                      <p className="lg:mr-40 flex justify-center text-white text-2xl font-bold dark:text-white">
                        GBSHSE Website
                      </p>
                    </div>
                  </Slide>
                  <p
                    id="desc1"
                    className="my-8 font-normal flex text-white dark:text-gray-100"
                  >
                    Official website for Goa State Board of India.
                  </p>
                </div>
              </Tilt>
            </Slide>
          </div>

          <div
            onClick={() => click(2)}
            className="sm:row-span-1 sm:card-text container max-w-lg mx-auto mt-10 sm:mt-12 cursor-pointer transition ease-in duration-700"
          >
            <Slide triggerOnce duration={500} direction="right">
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className={`card2 card-text bg-no-repeat bg-cover block shadow-2xl rounded-lg`}
              >
                <div
                  id="d2h1"
                  className={` bg-gray-100 h-full absolute  transition-all ease-in duration-1000 right-0.5 w-0 shadow-2xl  rounded-lg`}
                ></div>
                <div className="card-text p-6">
                  <div
                    id="line"
                    className="lg:w-36 bg-gray-100 mt-36 mr-96 h-1 absolute  transition-all ease-in duration-1000 right-8 translate w-0"
                  ></div>

                  <Slide triggerOnce duration={800}>
                    <div
                      id="title1"
                      className="lg:pr-64 flex justify-center right-8"
                    >
                      <div
                        id="d2h2"
                        className={`bg-gray-100 mr-96 h-32 absolute transition-all ease-in duration-1000 w-0 right-8 shadow-2xl`}
                      ></div>
                      <p className="lg:pr-64 flex justify-center text-white text-2xl  font-bold dark:text-white">
                        GBSHSE Website Admin Panel
                      </p>
                    </div>
                  </Slide>
                  <p
                    id="desc2"
                    className="mt-8 font-normal text-white dark:text-gray-100"
                  >
                    Internal Admin Panel website to maintain official website of
                    Goa State Board of India.
                  </p>
                </div>
              </Tilt>
            </Slide>
          </div>
          <div
            onClick={() => click(4)}
            className={`sm:row-span-2 card-text container mx-auto max-w-sm mt-40 cursor-pointer transition-opacity ease-in right-1 duration-700 `}
          >
            <Slide triggerOnce duration={500}>
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className="card4 h-full w-64 card-text bg-no-repeat bg-cover block shadow-2xl rounded-lg"
              >
                <div
                  id="d4h1"
                  className="mb-40 bg-gray-100 h-full fixed transition-all ease-in duration-1000 right-0.5 w-0  rounded-lg"
                ></div>
                <div className="lg:mr-40 card-text p-6">
                  <div id="title2" className="mt-72 flex justify-center">
                    <div
                      id="d4h2"
                      className="bg-gray-100 h-20 fixed transition-all ease-in duration-1000 right-0.5 w-0"
                    ></div>
                    <Slide triggerOnce duration={800} direction="right">
                      <p className="lg:pr-28 flex justify-center text-white text-2xl font-bold dark:text-white">
                        GameStop
                      </p>
                    </Slide>
                    <div
                      id="line"
                      className="bg-gray-100 mt-12 h-1 absolute transition-all ease-in duration-1000 sm:right-0.5 translate lg:w-40"
                    ></div>
                  </div>
                </div>
                <p
                  id="desc2"
                  className="mt-8 p-6 card-text font-normal text-white dark:text-gray-100"
                >
                  A personalized and revamped design of GameStop website.
                </p>
              </Tilt>
            </Slide>
          </div>
          <div
            onClick={() => click(3)}
            className="sm:row-span-1 card-text container max-w-sm mx-auto mt-40 cursor-pointer"
          >
            <Slide triggerOnce duration={500}>
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className="card3 card-text bg-no-repeat bg-cover block shadow-2xl-all rounded-lg"
              >
                <div
                  id="d3h1"
                  className="mb-40 bg-gray-100 h-full absolute  transition-all ease-in duration-1000 right-0.5 w-0  rounded-lg"
                ></div>
                <div className="card-text p-6">
                  <div
                    id="d3h2"
                    className="bg-gray-100 mr-72 h-16 absolute  transition-all ease-in duration-1000 right-0.5 translate w-0"
                  ></div>
                  <div
                    id="line"
                    className="bg-gray-100 sm:mt-20 mr-72 h-1 absolute  transition-all ease-in duration-1000 sm:right-0.5 translate lg:w-36"
                  ></div>
                  <Slide triggerOnce duration={800} direction="right">
                    <div id="title3" className="lg:pr-60 flex justify-center">
                      <p className="lg:pr-40 flex justify-center text-white text-2xl font-bold dark:text-white">
                        Spotify Clone
                      </p>
                    </div>
                  </Slide>
                  <p
                    id="desc3"
                    className="mt-8 font-normal text-white dark:text-gray-100"
                  >
                    Academic Project based on XML learnings and understanding of
                    JavaScript.
                  </p>
                </div>
              </Tilt>
            </Slide>
          </div>
          <div
            onClick={() => click(5)}
            className="sm:row-span-1 card-text container max-w-md mx-auto cursor-pointer"
          >
            <Slide triggerOnce duration={500}>
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className="card5 card-text bg-no-repeat bg-cover block shadow-2xl-all rounded-lg"
              >
                <div
                  id="d5h1"
                  className="mb-40 bg-gray-100 h-full absolute  transition-all ease-in duration-1000 right-0.5 w-0  rounded-lg"
                ></div>

                <div className="card-text p-6">
                  <Slide triggerOnce duration={800} direction="right">
                    <div id="title1" className="sm:pr-60 flex justify-center">
                      <div
                        id="d5h2"
                        className="bg-gray-100 mr-72 h-16 absolute  transition-all ease-in duration-1000 right-0.5 translate w-0"
                      ></div>
                      <p className="lg:pr-40 flex justify-center text-white text-2xl font-bold dark:text-white">
                        GBSHSE School Registration Portal
                      </p>
                      <div
                        id="line"
                        className="lg:w-36 bg-gray-100 absolute ml-24 mt-36 mr-80 h-1  transition-all ease-in duration-1000 right-2 translate w-0"
                      ></div>
                    </div>
                  </Slide>
                  <p
                    id="desc1"
                    className="my-8 font-normal text-white dark:text-gray-100"
                  >
                    Inetrnal website for Goa State Board of India.
                  </p>
                </div>
              </Tilt>
            </Slide>
          </div>

          {/* <div
            onClick={() => click(4)}
            className="sm:row-span-2 card-text container max-w-sm mx-auto mt-60 cursor-pointer"
          >
            <Slide triggerOnce duration={500} direction="right">
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className="card4 h-full w-64 card-text bg-no-repeat bg-cover block shadow-2xl rounded-lg"
              >
                <div
                  id="d4h1"
                  className="mb-40 bg-gray-100 h-full fixed transition-all ease-in duration-1000 right-0.5 w-0  rounded-lg"
                ></div>
                <div className="lg:mr-40 card-text p-6">
                  <div id="title2" className="mt-72 flex justify-center">
                    <div
                      id="d4h2"
                      className="bg-gray-100 h-20 fixed transition-all ease-in duration-1000 right-0.5 w-0"
                    ></div>
                    <Slide triggerOnce duration={800}>
                      <p className="lg:pr-28 flex justify-center text-white text-2xl font-bold dark:text-white">
                        GameStop
                      </p>
                    </Slide>
                    <div
                      id="line"
                      className="bg-gray-100 mt-12 h-1 absolute transition-all ease-in duration-1000 right-0.5 translate lg:w-40"
                    ></div>
                  </div>
                </div>
                <p
                  id="desc2"
                  className="mt-8 p-6 card-text font-normal text-white dark:text-gray-100"
                >
                  Official website for Goa State Board of India
                </p>
              </Tilt>
            </Slide>
          </div> */}
          {/* <div
            onClick={() => click(2)}
            className="sm:row-span-2 card-text container max-w-lg mx-auto mt-40 cursor-pointer"
          >
            <Slide triggerOnce duration={500}>
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className="card2 card-text bg-no-repeat bg-cover block shadow-2xl  rounded-lg"
              >
                <div
                  id="d2h1"
                  className=" bg-gray-100 h-full absolute  transition-all ease-in duration-1000 right-0.5 w-0 shadow-2xl  rounded-lg"
                ></div>
                <div className="card-text p-6">
                  <div
                    id="line"
                    className="lg:w-36 bg-gray-100 mt-36 mr-96 h-1 absolute  transition-all ease-in duration-1000 right-8 translate w-0"
                  ></div>
                  <div
                    id="d2h2"
                    className=" bg-gray-100 mr-96 h-32 absolute transition-all ease-in duration-1000 w-0 right-8 shadow-2xl"
                  ></div>
                  <Slide triggerOnce duration={800} direction="right">
                    <div id="title1" className="lg:pr-64 flex justify-center">
                      <p className="lg:pr-64 flex justify-center text-white text-2xl font-bold dark:text-white">
                        GBSHSE Website Admin Panel
                      </p>
                    </div>
                  </Slide>
                  <p
                    id="desc2"
                    className="mt-8 font-normal text-white dark:text-gray-100"
                  >
                    Internal Admin Panel website to maintain official website of
                    Goa State Board of India.
                  </p>
                </div>
              </Tilt>
            </Slide>
          </div> */}

          {/* <div
            onClick={() => click(3)}
            className="sm:row-span-1 card-text container  max-w-sm mx-auto mt-80  cursor-pointer"
          >
            <Slide triggerOnce duration={500} direction="right">
              <Tilt
                scale={1.2}
                transitionSpeed={2500}
                className="card3 card-text bg-no-repeat bg-cover block shadow-2xl-all rounded-lg"
              >
                <div
                  id="d3h1"
                  className="mb-40 bg-gray-100 h-full absolute  transition-all ease-in duration-1000 right-0.5 w-0  rounded-lg"
                ></div>
                <div className="card-text p-6">
                  <div
                    id="d3h2"
                    className="bg-gray-100 mr-72 h-16 absolute  transition-all ease-in duration-1000 right-0.5 translate w-0"
                  ></div>
                  <div
                    id="line"
                    className="bg-gray-100 mt-20 mr-72 h-1 absolute  transition-all ease-in duration-1000 right-0.5 translate lg:w-36"
                  ></div>
                  <Slide triggerOnce duration={800}>
                    <div id="title3" className="lg:pr-60 flex justify-center">
                      <p className="lg:pr-40 flex justify-center text-white text-2xl font-bold dark:text-white">
                        Spotify Clone
                      </p>
                    </div>
                  </Slide>
                  <p
                    id="desc3"
                    className="mt-8 font-normal text-white dark:text-gray-100"
                  >
                    Academic Project based on XML learnings and understanding of
                    JavaScript.
                  </p>
                </div>
              </Tilt>
            </Slide>
          </div> */}
        </div>
        /
      </section>
    </>
  );
};
