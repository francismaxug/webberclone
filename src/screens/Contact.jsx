import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <main>
      <Navbar />
      <div className=" mt-12 h-full mx-auto w-[64rem]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className=" text-center mt-32"
        >
          <p className="font-poppins text-skin-black text-[1.5rem] font-semibold  leading-loose">
            We’d love to hear from you
          </p>
          <p className=" font-poppins text-skin-gray text-[0.7rem]">
            We are always happy to listen and discuss our products, services, or{" "}
            <br />
            partnerships. Let us know what is on your mind!
          </p>
        </motion.div>
        <div className=" grid grid-cols-2 my-14">
          <div className=" py-7 px-16 rounded-l-full text-[0.8rem] text-skin-white flex gap-2 items-center bg-skin-blue">
            <img
              src="/person.png"
              alt=""
              width={30}
              height={30}
              className=" mb-4"
            />
            <motion.div
              initial={{ x: "14vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className=" space-y-1 "
            >
              <p className=" font-semibold">Become a client</p>
              <p className=" text-xs font-medium">Phone: +233 024 339 4471</p>
              <p className=" text-xs font-medium">
                Email: sales@webbermill.com
              </p>
            </motion.div>
          </div>
          <div className=" py-5 px-14 rounded-r-full bg-[#e5f3fe] text-[0.8rem] text-skin-blue flex gap-2 items-center">
            <img
              src="/correct.png"
              alt=""
              width={50}
              height={50}
              className=" mb-4"
            />
            <motion.div
              initial={{ x: "14vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className=" space-y-1 "
            >
              <p className=" font-semibold">Other enquiries</p>
              <p className=" text-xs font-medium">Phone: +233 024 339 4192</p>
              <p className=" text-xs font-medium">
                Email: enquiry@webbermill.com
              </p>
            </motion.div>
          </div>
        </div>
        <div className="mx-auto w-[37rem]">
          <div className=" text-center ">
            <p className="font-poppins text-skin-black text-[1.5rem] font-semibold  leading-loose">
              Send us a message
            </p>
            <p className=" font-poppins text-skin-gray text-[0.7rem]">
              Send us inquiry, we will reply within 30 minutes!
            </p>
          </div>
          <div className=" mt-16">
            <form className="space-y-12">
              <motion.div
                initial={{ x: "25vw" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-x-7 gap-y-10 items-center"
              >
                <div className=" flex flex-col space-y-2">
                  <label
                    htmlFor="firstName"
                    className=" text-gray-600 text-[0.7rem] font-poppins font-medium"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>{" "}
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="w-full h-7 px-3 text-[0.8rem] font-poppins text-skin-black font-semibold  border-b  border-skin-gray rounded-none focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className=" flex flex-col space-y-2">
                  <label
                    htmlFor="firstName"
                    className=" text-gray-600 text-[0.7rem] font-poppins font-medium"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>{" "}
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="w-full h-7 px-3 text-[0.8rem] font-poppins text-skin-black font-semibold  border-b focus:border-blue-500  border-skin-gray rounded-none focus:outline-none"
                  />
                </div>
                <div className=" flex flex-col space-y-2">
                  <label
                    htmlFor="firstName"
                    className=" text-gray-600 text-[0.7rem] font-poppins font-medium"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>{" "}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full h-7 px-3 text-[0.8rem] font-poppins text-skin-black font-semibold  border-b focus:border-blue-500  border-skin-gray rounded-none focus:outline-none"
                  />
                </div>
                <div className=" flex flex-col space-y-2">
                  <label
                    htmlFor="firstName"
                    className=" text-gray-600 text-[0.7rem] font-poppins "
                  >
                    phone<span className="text-red-500">*</span>
                  </label>{" "}
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full h-7 px-3 text-[0.8rem] font-poppins text-skin-black font-semibold  border-b focus:border-blue-500  border-skin-gray rounded-none focus:outline-none"
                  />
                </div>
                <div className=" flex flex-col space-y-2">
                  <label
                    htmlFor="firstName"
                    className=" text-gray-600 text-[0.7rem] font-poppins font-medium"
                  >
                    How did you hear about us ?{" "}
                    <span className="text-red-500">*</span>
                  </label>{" "}
                  <select
                    name="select"
                    id=""
                    className="w-full h-7 px-3 text-[0.7rem] font-poppins text-skin-black font-semibold  border-b focus:border-blue-500  border-skin-gray rounded-none focus:outline-none"
                  >
                    <option className="text-[0.7rem]" value="select">
                      --select--
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Google"
                    >
                      Google
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Social media"
                    >
                      Social Media
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Recomendation"
                    >
                      Recomendation
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Television"
                    >
                      Television
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Newsletter"
                    >
                      Newsletter
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Online Ads"
                    >
                      Online Ads
                    </option>
                  </select>
                </div>
                <div className=" flex flex-col space-y-2">
                  <label
                    htmlFor="firstName"
                    className=" text-gray-600 text-[0.7rem] font-poppins font-medium"
                  >
                    Select the appropriate service{" "}
                    <span className="text-red-500">*</span>
                  </label>{" "}
                  <select
                    name="select"
                    id=""
                    className="w-full h-7 px-3 text-[0.7rem] font-poppins text-skin-black font-semibold  border-b focus:border-blue-500  border-skin-gray rounded-none focus:outline-none"
                  >
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="select"
                    >
                      --select--
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Google"
                    >
                      Sales
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Social media"
                    >
                      Support
                    </option>
                    <option
                      className="text-[0.7rem] font-poppins font-semibold"
                      value="Recomendation"
                    >
                      General
                    </option>
                  </select>
                </div>
                <div className=" flex flex-col col-span-2 space-y-2">
                  <label
                    htmlFor="firstName"
                    className=" text-gray-600 text-[0.7rem] font-poppins font-medium"
                  >
                    Message
                  </label>{" "}
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={3}
                    placeholder="Write a message"
                    className="w-full  px-3 text-[0.8rem] placeholder:text-[0.68rem] placeholder:font-poppins font-poppins text-skin-black font-semibold  border-b focus:border-blue-500  border-skin-gray rounded-none focus:outline-none"
                  ></textarea>
                </div>
              </motion.div>
            </form>
            <div className=" mt-10 flex flex-col justify-center items-center gap-y-10">
              <p className="text-gray-600 text-[0.65rem] font-poppins text-center  ">
                By signing up, you are agreeing to our{" "}
                <Link className="text-skin-blue">terms</Link> and acknowledge
                reading our{" "}
                <Link className="text-skin-blue">privacy notice</Link>. Submit
              </p>
              <div className="">
                <Button className="btn-long   hover:transition-all duration-200 ease-linear  px-8">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="  bg-skin-footer font-poppins w-full mt-24 ">
        <Footer />
      </footer>
    </main>
  );
};

export default Contact;
