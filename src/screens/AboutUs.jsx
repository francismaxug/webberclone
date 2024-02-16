import Navbar from "../components/Navbar";
import { teams } from "../loops/imagesvg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <main>
      <Navbar />
      <div className="w-full h-screen mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=" mt-24 mb-16"
        >
          <h1 className="text-xl font-semibold font-poppins text-skin-black text-center">
            The Company
          </h1>
          <p className="text-center font-poppins text-[14px] text-skin-gray mt-5">
            Since 2016, we have invested in research & development <br /> and in
            our team to make workplaces fun, flexible and <br /> less rigid
            whiles increasing productivity
          </p>
        </motion.div>
        <div>
          <img
            className="w-full h-[29.5rem] object-cover object-center mb-20"
            src="https://res.cloudinary.com/webbermill/image/upload/v1679606056/webbermill-website-assets/static/banner/about_ffpzmz.png"
            alt="ladies"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className=" text-center text-skin-gray text-[17px] font-poppins mb-16"
        >
          <p className=" text-black text-[1rem]">We are committed to</p>
          <p className=" text-black font font-bold text-[1.3rem] py-1">
            TRANSFORMING, INSPIRING & ENRICHING LIVES
          </p>
          <p className=" leading-7">
            In the spirit of empathy for users, innovation and service, we’re
            impacting <br /> individual lives and disrupting core business
            structures. We provide range of <br /> flexible and easy to use
            enterprise applications which together form a complete <br /> suite
            of tools for businesses at all stages. We think every business
            regardless of <br /> the industry should have a software that
            work-out the complexity, revealing new <br /> insights and serving
            you with the information to stay ahead.
          </p>
        </motion.div>
        <div className="bg-[#f5f8ff] py-2">
          <div className="mx-auto w-[47rem] pb-20  text-center">
            <p className=" text-skin-black text-[1.6rem] font-poppins font-semibold my-12">
              Our Culture
            </p>
            <div className=" grid grid-cols-3 gap-5 gap-y-7">
              <motion.div
                initial={{ x: "-10vw" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="w-full rounded-md h-[20rem] hover:rounded-b-none group overflow-hidden z-50 relative"
              >
                <div className=" absolute z-20 text-gray-300 group-hover:-bottom-[0rem] transition-all duration-300 ease-linear -bottom-[7rem]">
                  <p className=" bg-black/70  font-poppins rounded-[0.9rem] py-1 mx-20 text-xs  mb-4">
                    Team-First
                  </p>
                  <div className=" bg-black/70 pb-2 h-28">
                    <p className=" font-poppins text-xs p-2">
                      Building a team of friends with regular socialization
                      outside of work. We listen and act on thoughtful feedback
                      from employees
                    </p>
                  </div>
                </div>
                <img
                  className=" object-cover object-center h-full  w-full mb-5 absolute"
                  src="https://res.cloudinary.com/webbermill/image/upload/v1679606059/webbermill-website-assets/static/images/client1-old_ggpfu5.jpg"
                  alt=""
                />
              </motion.div>
              <div className="w-full rounded-md h-[20rem] hover:rounded-b-none group overflow-hidden z-50 relative">
                <div className=" absolute z-20 text-gray-300 group-hover:-bottom-[0rem] transition-all duration-300 ease-linear -bottom-[7rem]">
                  <p className=" bg-black/70  font-poppins rounded-[0.9rem] py-1 mx-20 text-xs  mb-4">
                    Opportunity
                  </p>
                  <div className=" bg-black/70 pb-2 h-28">
                    <p className=" font-poppins text-xs p-2">
                      Through continuous investment, we empower team members to
                      dare to dream. Be creative, innovative and most
                      importantly be yourself
                    </p>
                  </div>
                </div>
                <img
                  className=" object-cover object-center h-full w-full absolute mb-5"
                  src="https://res.cloudinary.com/webbermill/image/upload/v1679606041/webbermill-website-assets/static/images/client2_cy5w4t.jpg"
                  alt=""
                />
              </div>
              <motion.div
                initial={{ x: "10vw" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="w-full rounded-md h-[20rem] hover:rounded-b-none group overflow-hidden z-50 relative"
              >
                <div className=" absolute z-20 text-gray-300 group-hover:-bottom-[0rem] transition-all duration-300 ease-linear -bottom-[7rem]">
                  <p className=" bg-black/70  font-poppins rounded-[0.9rem] py-1 mx-20 text-xs  mb-4">
                    Diversity
                  </p>
                  <div className=" bg-black/70 pb-2 h-28">
                    <p className=" font-poppins text-xs p-2">
                      We believe our business is to enrich and inspire lives
                      therefore we represent people of all walks of lives,
                      promote inclusivity at all levels.
                    </p>
                  </div>
                </div>
                <img
                  className=" object-cover object-center w-full h-full  mb-5"
                  src="https://res.cloudinary.com/webbermill/image/upload/v1679606040/webbermill-website-assets/static/images/client3_ldihli.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ y: "15vh" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto w-[30rem] grid grid-cols-2 gap-5 ml-32"
              >
                <div className="w-full rounded-md h-[20rem] hover:rounded-b-none group overflow-hidden z-50 relative">
                  <div className=" absolute z-20 text-gray-300 group-hover:-bottom-[0rem] transition-all duration-300 ease-linear -bottom-[7rem]">
                    <p className=" bg-black/70  font-poppins rounded-[0.9rem] py-1 mx-20 text-xs  mb-4">
                      Openness
                    </p>
                    <div className=" bg-black/70 pb-2 h-28">
                      <p className=" font-poppins text-xs p-2">
                        At any giving point in time, we ensure that the state of
                        the company is known to all within. We encourage
                        employees to interact across the entire organization.
                      </p>
                    </div>
                  </div>
                  <img
                    className=" object-cover object-center h-full w-full mb-5"
                    src="https://res.cloudinary.com/webbermill/image/upload/v1679606041/webbermill-website-assets/static/images/client4_sz5vvl.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full rounded-md h-[20rem] hover:rounded-b-none group overflow-hidden z-50 relative">
                  <div className=" absolute z-20 text-gray-300 group-hover:-bottom-[0rem] transition-all duration-300 ease-linear -bottom-[7rem]">
                    <p className=" bg-black/70  font-poppins rounded-[0.9rem] py-1 mx-[4rem] text-xs  mb-4">
                      Venurability
                    </p>
                    <div className=" bg-black/70 pb-2 h-28">
                      <p className=" font-poppins text-xs p-2">
                        We truly believe and build enabling space for people to
                        be their true selves, share their challenges and gifts
                        at the workplace with colleagues.
                      </p>
                    </div>
                  </div>
                  <img
                    className=" object-cover object-center w-full h-full  mb-5"
                    src="https://res.cloudinary.com/webbermill/image/upload/v1679606041/webbermill-website-assets/static/images/client5_j8uqh8.jpg"
                    alt=""
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className=" mb-12">
          <div className="mx-auto w-[56rem] mt-20 text-center ">
            {" "}
            <p className=" text-skin-black text-[1.6rem] font-poppins font-semibold my-12">
              Our Team
            </p>
            <div className=" grid grid-cols-3 gap-8">
              {teams.map((item) => (
                <motion.div
                  initial={{ y: "20vh" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" group relative 
                "
                >
                  <div
                    className={`top-5 left-[15%] mb-12  relative rounded-full bg-center bg-cover w-48 h-48 border-2 before:absolute  ${
                      item.id === 1 || item.id === 6 ? "before:bg-blue-500" : ""
                    }  before:-z-10 before:translate before:transform before:w-[11.8rem] before:h-[11.8rem] before:scale-[1.17] before:rounded-full before:transition-all before:duration-700  group-hover:before:scale-105 ease-in before:inset-0 transition duration-700  ${
                      item.id === 11 ? " before:bg-pink-400" : ""
                    }   ${
                      item.id === 2 || item.id === 7
                        ? "before:bg-green-500"
                        : ""
                    }   ${
                      item.id === 5 || item.id === 10
                        ? " before:bg-gray-500"
                        : ""
                    }  ${
                      item.id === 4 || item.id === 8
                        ? " before:bg-orange-300"
                        : ""
                    }  ${
                      item.id === 3 || item.id === 9
                        ? " before:bg-purple-500"
                        : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt=""
                      className={`object-cover  z-40   object-center absolute rounded-full ${
                        item.id === 5 ? "w-[13rem] h-[12rem]" : ""
                      } ${item.id === 10 ? "w-[12rem] h-[12rem]" : ""}  ${
                        item.id === 8 ? "w-[14rem] h-[12rem]" : ""
                      }`}
                    />
                    <div className="group-hover:bg-gray-100/25 absolute z-50 w-full h-full rounded-full"></div>
                  </div>
                  <div className=" font-poppins">
                    <p className=" font-bold text-[18px] text-black/70">
                      {item.name}
                    </p>
                    <p className=" text-[15px] p-2">{item.position}</p>
                    <a href={item.linkedin} target="_blank">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-[#f5f8ff] py-1">
          <div className="mx-auto w-[43rem] pb-16  text-center">
            <p className=" text-skin-black text-[1.6rem] font-poppins font-semibold my-12">
              Our Partners
            </p>
            <div className=" grid grid-cols-3 gap-28 gap-y-16">
              <div className="mt-10">
                <img src="/aws.png" alt="" className=" w-20 h-14" />
              </div>
              <div className="">
                {" "}
                <img src="/digital.png" alt="" className=" w-32 h-32" />
              </div>
              <div>
                {" "}
                <img
                  src="/antartic.png"
                  alt=""
                  className=" w-[5.8rem] h-[7.5rem]"
                />
              </div>
              <div>
                {" "}
                <img src="/jkh.png" alt="" className=" w-28 h-16" />
              </div>
              <div>
                {" "}
                <img src="/git.png" alt="" className="ml-6  w-20 h-20" />
              </div>
              <div>
                {" "}
                <img src="/tinatet.png" alt="" className="  w-36 h-12" />
              </div>
              <div>
                {" "}
                <img src="/goggle.png" alt="" className="  w-32 h-12" />
              </div>
              <div>
                {" "}
                <img src="/kranson.png" alt="" className="-mt-6  w-36 h-20" />
              </div>
            </div>
          </div>
        </div>
        <footer className="  bg-skin-footer font-poppins w-full ">
          <Footer />
        </footer>
      </div>
    </main>
  );
};

export default AboutUs;
