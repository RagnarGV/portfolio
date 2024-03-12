import "./About.css";
export const About = () => {
  return (
    <>
      <div className="mx-auto sm:py-20 ">
        <div className="hidden sm:block float-right opacity-100">
          <h3 className=" text-blue-500 text-9xl font-bold font-Comfortaa ">
            ABOUT
          </h3>
        </div>
        <div className="block sm:hidden mx-auto sm:px-40 items-center opacity-100">
          <h3 className="text-gray-700 absolute m-auto text-3xl font-bold font-Comfortaa ">
            ABOUT
          </h3>
        </div>
        <div className="container m-auto backdrop-blur-2xl backdrop-opacity-80 bg-opacity-50 bg-gray-700 rounded-xl p-10">
          <p className="text-xl codeclass sm:pl-72 hover:bg-gray-800">
            class{" "}
            <span className="variable">
              Gaurav_Hariyani <span className="text-white">{"{"}</span>
            </span>
          </p>

          <p className="text-xl codeclass sm:pl-80 hover:bg-gray-800">
            <span className="text-xl codeclass ">{"constructor"}</span>
            <span className="text-xl text-white">{"() {"}</span>
          </p>
          <p className="text-yellow-200 text-xl sm:pl-96 font-Courier hover:bg-gray-800">
            <span className=" text-red-500">this.</span>
            <span className=" text-yellow-500">name</span>
            <span className=" text-red-500"> = </span>'Gaurav Hariyani'
          </p>
          <p className="text-yellow-200 text-xl sm:pl-96 font-Courier break-all hover:bg-gray-800">
            <span className=" text-red-500">this.</span>
            <span className=" text-yellow-500">email</span>
            <span className=" text-red-500 "> = </span>{" "}
            'gauravhariyani12.gh@gmail.com'
          </p>
          <p className="text-yellow-200 text-xl sm:pl-80 font-Courier hover:bg-gray-800">
            <span className="text-white w-full ">{"}"}</span>
          </p>
          <p className="text-xl sm:pl-80 variable hover:bg-gray-800">
            {"education"} <span className="text-xl text-white">{"() {"}</span>
          </p>
          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl codeclass">{"return"}</span>{" "}
            <span className="text-xl text-white">{"("}</span>
          </p>
          <p className="text-xl  sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl ml-24 text-white">{"{"}</span>
            {
              "'2017-2020': 'Maharashta Institute of Technology - Bachelor's Degree (BBA-CA), Computer Applications'"
            }
            <span className="text-xl text-white">{"}"}</span>
          </p>

          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl ml-24 text-white">{"{"}</span>
            {
              "'2023-present': 'Humber College - 'Information Technology Solutions', Computer Applications'"
            }{" "}
            <span className="text-xl text-white">{"}"}</span>
          </p>

          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl text-white">{")"}</span>
          </p>
          <p className="text-xl sm:pl-80 variable hover:bg-gray-800">
            <span className="text-xl text-white">{"}"}</span>
          </p>
          <p className="text-xl sm:pl-80 variable hover:bg-gray-800">
            {"workExperience"}{" "}
            <span className="text-xl text-white">{"() {"}</span>
          </p>
          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl codeclass">{"return"}</span>{" "}
            <span className="text-xl text-white">{"("}</span>
          </p>
          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl text-white ml-24">{"{"}</span>
            {"'2020-2020': 'Intern at Edhaas Digisoft Pvt. Ltd.'"}
            <span className="text-xl text-white">{"}"}</span>
            <br />
            <p className="text-xl sm::pl-96 variable hover:bg-gray-800">
              <span className="text-xl text-white ml-24">{"{"}</span>
              {
                "'2020-2022': 'Full-stack Developer at Edhaas Digisoft Pvt. Ltd.'"
              }
              <span className="text-xl text-white">{"}"}</span>
            </p>
          </p>

          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl text-white">{")"}</span>
          </p>
          <p className="text-xl sm:pl-80 variable hover:bg-gray-800">
            <span className="text-xl text-white">{"}"}</span>
          </p>

          <p className="text-xl sm:pl-80 variable hover:bg-gray-800">
            {"skills"}
            <span className="text-xl text-white">{"() {"}</span>
          </p>
          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl codeclass">{"return"}</span>{" "}
            <span className="text-xl text-white">{"("}</span>
          </p>

          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl ml-24 text-white">{"[ "}</span>

            {
              "'HTML/CSS/JS', 'React', 'Bootstrap/Tailwind', 'SCSS/Less', 'npm', 'Angular', 'CodeIgnitor', 'Laravel', 'C#', 'ASP.Net', 'Firebase', 'PHP', 'MySQL/SQLServer/Oracle', 'Premiere', 'AWS', 'TypeScript'"
            }
            <span className="text-xl text-white">{" ]"}</span>
          </p>
          <p className="text-xl sm:pl-96 variable hover:bg-gray-800">
            <span className="text-xl text-white">{")"}</span>
          </p>

          <p className="text-xl sm:pl-80 variable hover:bg-gray-800">
            <span className="text-xl text-white">{"}"}</span>
          </p>
          <p className="text-xl sm:pl-72 variable hover:bg-gray-800">
            <span className="text-xl text-white">{"}"}</span>
          </p>
        </div>
      </div>
    </>
  );
};
