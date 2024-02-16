import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { supportText } from "../loops/support";
import Footer from "../components/Footer";

function Support() {
  return (
    <main className=" relative ">
      <Navbar />
      <div className=" w-full bg-white mt-12   fixed h-screen ">
        <img
          src="/weberimage.jpg"
          alt=""
          className=" absolute  -left-10 w-96 h-96 top-20"
        />
        <div className="bg-gray-100/75 absolute z-50 w-full h-full "></div>
      </div>
      <div className=" top-0 left-0 z-10 bg-white/75 mt-12 w-full  absolute">
        <div className="mx-auto w-[64rem] ">
          <div className="mt-32">
            <p className=" font-poppins text-skin-blue text-3xl tracking-wide leading-loose">
              Webbermill
            </p>
            <p className=" font-poppins text-skin-blue text-3xl tracking-wide font-semibold">
              Support Centre
            </p>
          </div>
          <div className=" flex gap-5 items-center mt-24 justify-between">
            <Link>
              <div className=" bg-skin-main p-7 h-[10rem] w-[20rem] flex justify-center items-center border shadow-lg rounded-r-full rounded-l-full text-center">
                <p className=" font-poppins text-skin-gray text-sm">
                  I want to know more about...
                </p>
              </div>
            </Link>
            <Link>
              <div className=" bg-skin-main p-7 h-[10rem] w-[20rem] flex justify-center items-center border shadow-lg rounded-r-full rounded-l-full text-center">
                <p className=" font-poppins text-skin-gray text-sm">
                  I am having trouble with...
                </p>
              </div>
            </Link>
            <Link>
              <div className=" bg-skin-main p-7 h-[10rem] w-[20rem] flex justify-center items-center border shadow-lg rounded-r-full rounded-l-full text-center">
                <p className=" font-poppins text-skin-gray text-sm">
                  Contact support desk
                </p>
              </div>
            </Link>
          </div>
          <div className=" text-center mt-24">
            <p className="font-poppins text-skin-blue text-[1.98rem] tracking-wide leading-loose">
              Frequently Asked Questions
            </p>
            <p className=" font-poppins text-skin-gray text-sm">
              Get all the tips and headsupand more from tewaa guide
            </p>
          </div>
          <div className=" grid grid-cols-2 gap-5 mt-16 mb-14">
            {supportText.map((item) => (
              <div
                className=" border border-gray-300 rounded-md bg-skin-main px-6 pt-3 pb-4  font-poppins"
                key={item.id}
              >
                <p className=" leading-loose text-[0.8rem] pb-2 text-gray-900">
                  {item.heading}
                </p>
                <p className=" text-[0.7rem] text-skin-gray leading-[1.4rem]">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
        <footer className="  bg-skin-footer font-poppins w-full ">
          <Footer />
        </footer>
      </div>
    </main>
  );
}
export default Support;
