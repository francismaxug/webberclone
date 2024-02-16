import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import SvgContainer from "../components/SvgContainer";
import { modalText, scroll } from "../loops/imagesvg";
import { Link } from "react-router-dom";

const Main = () => {
  const openVariants = {
    hidden: {
      x: "-25vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delayChildren: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const openVariantsChild = {
    hidden: { x: "-70vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 4,
        bounce: 0.4,
        type: "spring",
      },
    },
  };
  const openVariantsChild1 = {
    hidden: { x: "-70vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        bounce: 0.4,
      },
    },
  };

  const childrenVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      when: "beforeChildren",
      staggerChildren: 0.4,
      transition: {
        ease: "linear",
        duration: 1,
      },
    },
  };
  const childrenScrollVariants1 = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
      transition: { ease: "linear", duration: 0.9 },
    },
  };
  const upcomingVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  };
  const upcomingChildrenVariants1 = {
    hidden: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  };
  const upcomingChildrenVariants2 = {
    hidden: {
      x: "20vw",
      opacity: 1,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.4,
      },
    },
  };
  return (
    <>
      <main className=" overflow-clip">
        <Navbar />

        <div className="relative w-full bg-cover z-10 bg-center h-[565px] top-12 flex items-center">
          <img
            src="/lap2.jpg"
            alt="photo"
            className="absolute  w-full h-full object-cover object-center"
          />
          <div className="absolute left-7 top-10">
            <SvgContainer />
          </div>
          <div className="absolute right-48 top-14">
            <SvgContainer />
          </div>
          <div className="absolute right-64 bottom-7">
            <SvgContainer />
          </div>
          <motion.div
            variants={openVariants}
            initial="hidden"
            animate="visible"
            className=" absolute text-skin-white flex flex-col justify-center w-1/2 ml-20"
          >
            <h1 className=" font-semibold text-6xl font-poppins">
              Work together,
            </h1>
            <motion.p
              variants={openVariantsChild}
              className="  text-5xl font-poppins py-4"
            >
              From anywhere
            </motion.p>
            <p className="font-poppins">
              Modernize your teams operation with unique and powerful
              <br /> suite of software to run your entire business flexibly &
              smartly
              <br /> without limitation.
            </p>
            <motion.div
              variants={openVariantsChild1}
              className=" gap-4 flex mt-11"
            >
              <Button className=" btn-long text-[16px] py-2 px-9">
                SIGN UP FOR FREE{" "}
                <span>
                  <ChevronRightIcon
                    strokeWidth={4}
                    stroke="currentColor"
                    className="w-[11px] ml-2 h-[11px] inline-block"
                  />
                </span>
              </Button>
              <Button className="btn-long py-2 px-9 font-poppins text-[16px] bg-transparent border-white">
                REQUEST A DEMO
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className=" mx-auto w-[56rem] relative top-20   mb-28 mt-8 ">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.9, delay: 0.5 }}
            className="text-center text-[30px] font-poppins text-skin-black/10 mb-9"
          >
            Apps inspired by {""}
            <span className=" text-skin-black font-medium font-poppins">
              your needs
            </span>
          </motion.h1>
          <motion.div
            variants={childrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" grid grid-cols-2 gap-x-8 gap-y-14 mb-14"
          >
            {modalText.map((item) => (
              <motion.div
                variants={childrenScrollVariants1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={item.id}
                className=" border group flex items-center px-5 rounded-[15px] h-36"
              >
                <div className=" flex justify-between gap-x-7 ">
                  <img
                    src={item.src}
                    alt={item.title}
                    width={70}
                    height={70}
                    className=" flex self-start"
                  />
                  <div className=" flex flex-col gap-2 justify-center">
                    <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                      {item.title}
                    </h5>
                    <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-4">
                      {item.text}
                    </p>
                    <Link className="  font-poppins text-skin-blue text-sm">
                      {item.btn}{" "}
                      <span>
                        <ChevronRightIcon
                          strokeWidth={4}
                          stroke="currentColor"
                          className="w-[11px] ml-1 transition-all duration-300 ease-linear group-hover:translate-x-1  h-[11px] inline-block"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <Link to="/products">
            <Button className=" flex justify-center mb-4  items-center rounded-full py-2 px-7 font-poppins text-[16px] bg-skin-semi mx-auto text-skin-blue">
              View all products
            </Button>
          </Link>
          <hr className=" mx-24" />
        </div>
        <div className="mx-auto w-[56rem] relative ">
          <h1 className="text-center text-[30px] font-poppins text-skin-black/10 my-12">
            One platform to manage{" "}
            <span className=" text-skin-black font-medium">your business</span>
          </h1>
          <div className="absolute -right-6 top-10">
            <SvgContainer main={true} />
          </div>
          <div className="relative  mb-20">
            <iframe
              className="w-full h-[565px]"
              src="https://www.youtube.com/embed/PhO7prCJR9Y?si=8nF4VV6JvhuF-0Fd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="absolute -left-10 top-[650px]">
            <SvgContainer main={true} />
          </div>
          <hr className="mx-24" />
        </div>

        <motion.div
          variants={upcomingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto w-[56rem] mt-20 relative "
        >
          <div className=" grid grid-cols-2 gap-8">
            <motion.div variants={upcomingChildrenVariants1} className=" w-80">
              <p className=" font-poppins text-xl tracking-wide ">Trusted by</p>
              <p className=" text-skin-black tracking-wide font-bold text-2xl font-poppins mt-2">
                leading businesses
              </p>
              <p className=" text-[14px] font-light tracking-wide text-skin-gray font-poppins mt-3">
                Experience reliable, flexiblbe and secure business platform
                <br /> for your ever growing business.
                <br /> Drive productivity with 21+ integrated applications
                already
                <br />
                used by vibrant businesses in all the top industries.
              </p>
            </motion.div>
            <div className="absolute bottom-28 left-32">
              <SvgContainer main={true} />
            </div>
            <motion.div
              variants={upcomingChildrenVariants2}
              className="gap-3 w-full grid h-[21rem] scrollbar-thump scrollbar-thin scrollbar-webkit overflow-y-scroll overflow-x-clip relative mb-20"
            >
              {scroll.map((item) => (
                <div
                  key={item.title}
                  className=" group object-cover bg-slate-700/90 relative  w-full bg-center bg-cover h-32"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className=" object-cover object-center hover:mix-blend-lighten mix-blend-overlay  w-full h-full transition-all duration-300 ease-in hover:transform hover:scale-105 "
                  />
                  <p className=" text-skin-white  font-poppins absolute top-0  mt-6 ml-6">
                    {item.title}
                  </p>
                  <div className=" flex  items-center">
                    <p className=" text-skin-white absolute font-poppins text-[15px] text-pretty font-light bottom-0 mb-4 ml-6">
                      {item.subtitle}
                      <span>
                        <ArrowRightIcon
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-[12px] ml-1 group-hover:ml-3 transition-all duration-500 h-[12px]  inline-block"
                        />
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <div className="relative  bg-gray-600 bg-center bg-cover w-full h-80 flex items-center justify-center">
          <img
            src="/lap3.jpg"
            alt="photo"
            className="absolute mix-blend-overlay w-full h-full object-cover object-center"
          />
          <div className=" absolute text-skin-white flex items-center justify-center flex-col gap-5">
            <h1 className=" text-[1.7rem] font-bold font-poppins">
              Get started for free today
            </h1>
            <p className=" text-sm font-poppins">
              No expiry date | No payment required
            </p>
            <div className=" flex justify-center items-center w-full h-full mt-8">
              <Button className="absolute btn-long text-[16px] font-poppins py-2 px-9">
                SIGN UP FOR FREE{" "}
                <span>
                  <ChevronRightIcon
                    strokeWidth={4}
                    stroke="currentColor"
                    className="w-[11px] ml-2 h-[11px] inline-block"
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className=" mx-auto w-[56rem] mt-16  mb-16 ">
          <div className=" flex items-center justify-between ">
            <p className="text-[1.6rem] font-poppins tracking-wide">
              Stay{" "}
              <span className=" font-poppins font-bold text-skin-black ">
                up-to-date
              </span>
            </p>
            <Button className="btn-long text-[12px] font-poppins px-5 py-[9px]">
              VISIT OUR BLOG
            </Button>
          </div>
          <motion.div
            variants={upcomingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 justify-between mt-14  w-full"
          >
            <motion.div
              variants={upcomingChildrenVariants1}
              className=" w-full shadow-lg"
            >
              <img
                src="/peoplesiting.jpg"
                alt="people"
                className=" object-cover object-center w-full h-56"
              />
              <div className=" p-6">
                <p className="pb-3 text-[0.65rem] font-poppins text-skin-blue">
                  Softwares
                </p>
                <p className=" pb-3 text-sm font-poppins text-skin-black font-semibold">
                  Useful Software for Construction Companies
                </p>
                <p className=" text-[13.6px] pb-3 leading-[1.2rem] tracking-wide text-skin-gray font-poppins">
                  Despite technological progress, most construction companies in
                  <br />
                  Africa still rely on manual data entry, spreadsheets, and
                  paperwork
                  <br /> for their business processes...
                </p>
                <div className="float-right mb-4">
                  {" "}
                  <Button className="read-more ">Read More</Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={upcomingChildrenVariants2}
              className=" w-full shadow-lg"
            >
              <img
                src="/ladywritting.jpg"
                alt="people"
                className=" object-cover object-center w-full h-56"
              />
              <div className=" p-6">
                {" "}
                <p className=" pb-3 text-[0.65rem] font-poppins text-skin-blue">
                  Data Loss
                </p>
                <p className=" pb-3 text-sm font-poppins text-skin-black font-semibold">
                  Ways to Prevent Data Loss in your Company
                </p>
                <p className="pb-3  text-[13.6px] tracking-wide leading-[1.2rem]  text-skin-gray font-poppins">
                  Many organizations rely on technology to perform business
                  operations
                  <br /> and store important information. Data protection,
                  therefore,
                  <br /> is a critical element of business success...
                </p>
                <div className="float-right mb-4">
                  {" "}
                  <Button className="read-more font-poppins">Read More</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <footer className="  bg-skin-footer font-poppins w-full ">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Main;

{
  /* <div className=" group object-cover relative  bg-gray-700  w-full bg-center bg-cover h-32">
              <img
                src="https://res.cloudinary.com/webbermill/image/upload/v1679606045/webbermill-website-assets/static/news/antartic_p8sqk4.jpg"
                alt=" photo"
                className=" relative object-cover object-center w-full h-full transition-all duration-300 ease-in hover:transform hover:scale-105 hover:mix-blend-lighten mix-blend-overlay"
              />
              <p className=" text-white font-poppins absolute top-0 mt-6 ml-6">
                Antartic Ltd
              </p>
              <div className=" flex  items-center">
                <p className=" text-white  font-poppins absolute text-[15px] text-pretty font-light bottom-0 mb-4 ml-6">
                  Learn More
                  <span>
                    <ArrowRightIcon
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-[12px] ml-1 group-hover:ml-3 transition-all duration-500 h-[12px]  inline-block"
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className=" object-cover bg-slate-700/90 relative  w-full bg-center bg-cover h-32">
              <img
                src="https://res.cloudinary.com/webbermill/image/upload/v1679606043/webbermill-website-assets/static/news/jhk_wfzwcf.jpg"
                alt=" photo"
                className=" object-cover object-center w-full transition-all duration-300 ease-in h-full hover:transform hover:scale-110 hover:mix-blend-lighten mix-blend-overlay"
              />
              <p className=" text-white absolute top-0">hhkhk</p>
            </div>
            <div className=" object-cover bg-slate-700/90 relative  w-full bg-center bg-cover h-32">
              <img
                src="https://res.cloudinary.com/webbermill/image/upload/v1679606045/webbermill-website-assets/static/news/herbal_c21gu1.jpg"
                alt=" photo"
                className=" object-cover object-center transition-all duration-300 ease-in w-full h-full hover:transform hover:scale-110 hover:mix-blend-lighten mix-blend-overlay"
              />
              <p className=" text-white absolute top-0">hhkhk</p>
            </div>
            <div className=" object-cover bg-slate-700/90 relative  w-full bg-center bg-cover h-32">
              <img
                src="https://res.cloudinary.com/webbermill/image/upload/v1679606045/webbermill-website-assets/static/news/car_pic_nukbrt.jpg"
                alt=" photo"
                className=" object-cover object-center transition-all duration-300 ease-in w-full h-full hover:transform hover:scale-110 hover:mix-blend-lighten mix-blend-overlay"
              />
              <p className=" text-white absolute top-0">hhkhk</p>
            </div>
          </div> */
}
