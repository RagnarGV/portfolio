import "./Contact.css";
import { Slide } from "react-awesome-reveal";
export const Contact = () => {
  return (
    <>
      <div className="hidden sm:grid  grid-cols-2 gap-4 font-Baumans p-20">
        <Slide className="mx-auto" direction="up" triggerOnce>
          <div className="mx-auto text-gray-400 text-9xl p-10 ">
            <p className="italic">GET</p>
            <p className="italic">IN</p>
            <p className="italic">TOUCH</p>
          </div>
        </Slide>
        <div className="mx-auto text-gray-400 p-10">
          <Slide cascade direction="up" triggerOnce duration={400}>
            <p className="text-3xl italic p-10">
              Contact: {"(+1) 647-897-4271"}
            </p>
            <p className="text-3xl italic p-10">
              Email:{" "}
              <a
                className="hover:underline"
                href="mailto:gauravhariyani12.gh@gmail.com"
              >
                gauravhariyani12.gh@gmail.com
              </a>
            </p>
          </Slide>
        </div>
      </div>
      <div className="grid sm:hidden  grid-rows-2 gap-4 font-Baumans p-5">
        <Slide direction="up" triggerOnce>
          <div className="mx-auto text-gray-400 text-8xl p-5 ">
            <p className="italic">GET</p>
            <p className="italic">IN</p>
            <p className="italic">TOUCH</p>
          </div>
        </Slide>
        <div className="mx-auto text-gray-400 p-5">
          <Slide cascade direction="up" triggerOnce duration={400}>
            <p className="text-xl italic p-5">Contact: {"(+1) 647-897-4271"}</p>
            <p className="text-xl italic p-5">
              Email:{" "}
              <a
                className="hover:underline"
                href="mailto:gauravhariyani12.gh@gmail.com"
              >
                gauravhariyani12.gh@gmail.com
              </a>
            </p>
          </Slide>
        </div>
      </div>
    </>
  );
};
