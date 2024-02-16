import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";

import {
  marketing,
  transport,
  sales,
  productivity,
  human_resource,
  finance,
  inventory,
} from "../loops/imagesvg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ProductScreen = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-screen  mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=" mt-28 text-center"
        >
          <h1 className="text-center text-[30px] font-poppins text-skin-black/10  mb-3">
            Apps inspired by{" "}
            <span className=" text-skin-black font-medium">your needs</span>
          </h1>
          <p className="pb-3  text-[14px] tracking-wide leading-[1.2rem]  text-skin-gray font-roboto">
            Choose from an unrivaled set of apps to work more efficiently with{" "}
            <br /> customizable capabilities that empower your business to move
            faster.
          </p>
        </motion.div>
        <div className="mt-16 mx-auto w-[64rem]">
          <div className="mb-14">
            <h3 className=" mb-5 text-[0.8rem] font-poppins font-medium">
              Human Resource
            </h3>
            <div className=" grid grid-cols-3 gap-x-6 gap-y-8">
              {human_resource.map((item) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" border flex items-center px-3 rounded-[15px] h-36"
                >
                  <div className=" flex justify-between gap-x-3 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      className=" flex self-start"
                    />
                    <div className=" flex flex-col gap-1 justify-center">
                      <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                        {item.title}
                      </h5>
                      <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-2">
                        {item.subtitle}
                      </p>
                      <p className="  font-poppins text-sm">
                        {item.btn}{" "}
                        <span>
                          <ChevronRightIcon
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-[11px] ml-2 h-[11px] inline-block"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-14">
            <h3 className=" mb-5 text-[0.8rem] font-poppins font-medium">
              Finance
            </h3>
            <div className=" grid grid-cols-3 gap-x-6 gap-y-8">
              {finance.map((item) => (
                <motion.div
                  initial={{ y: "10vh", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" border flex items-center px-3 rounded-[15px] h-36"
                >
                  <div className=" flex justify-between gap-x-3 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      className=" flex self-start"
                    />
                    <div className=" flex flex-col gap-1 justify-center">
                      <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                        {item.title}
                      </h5>
                      <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-2">
                        {item.subtitle}
                      </p>
                      <p className="  font-poppins text-sm">
                        {item.btn}{" "}
                        <span>
                          <ChevronRightIcon
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-[11px] ml-2 h-[11px] inline-block"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-14">
            <h3 className=" mb-5 text-[0.8rem] font-poppins font-medium">
              Inventory
            </h3>
            <div className=" grid grid-cols-3 gap-x-6 gap-y-8">
              {inventory.map((item) => (
                <motion.div
                  initial={{ x: "-13vw", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" border flex items-center px-3 rounded-[15px] h-36"
                >
                  <div className=" flex justify-between gap-x-3 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      className=" flex self-start"
                    />
                    <div className=" flex flex-col gap-1 justify-center">
                      <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                        {item.title}
                      </h5>
                      <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-2">
                        {item.subtitle}
                      </p>
                      <p className="  font-poppins text-sm">
                        {item.btn}{" "}
                        <span>
                          <ChevronRightIcon
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-[11px] ml-2 h-[11px] inline-block"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-14">
            <h3 className=" mb-5 text-[0.8rem] font-poppins font-medium">
              Transport
            </h3>
            <div className=" grid grid-cols-3 gap-x-6 gap-y-8">
              {transport.map((item) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" border flex items-center px-3 rounded-[15px] h-36"
                >
                  <div className=" flex justify-between gap-x-3 mt-1 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      className=" flex self-start"
                    />
                    <div className=" flex flex-col gap-1 justify-center">
                      <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                        {item.title}
                      </h5>
                      <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-2">
                        {item.subtitle}
                      </p>
                      <p className="  font-poppins text-sm">
                        {item.btn}{" "}
                        <span>
                          <ChevronRightIcon
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-[11px] ml-2 h-[11px] inline-block"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-14">
            <h3 className=" mb-5 text-[0.8rem] font-poppins font-medium">
              Sales
            </h3>
            <div className=" grid grid-cols-3 gap-x-6 gap-y-8">
              {sales.map((item) => (
                <motion.div
                  initial={{ x: "15vw", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" border flex items-center px-3 rounded-[15px] h-36"
                >
                  <div className=" flex justify-between gap-x-3 mt-1  ">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      className=" flex self-start"
                    />
                    <div className=" flex flex-col gap-1 justify-center">
                      <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                        {item.title}
                      </h5>
                      <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-2">
                        {item.subtitle}
                      </p>
                      <p className="  font-poppins text-sm">
                        {item.btn}{" "}
                        <span>
                          <ChevronRightIcon
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-[11px] ml-2 h-[11px] inline-block"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-14">
            <h3 className=" mb-5 text-[0.8rem] font-poppins font-medium">
              Marketing
            </h3>
            <div className=" grid grid-cols-3 gap-x-6 gap-y-8">
              {marketing.map((item) => (
                <motion.div
                  initial={{ x: "-13vw", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" border flex items-center px-3 rounded-[15px] h-36"
                >
                  <div className=" flex justify-between gap-x-3 mt-1 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      className=" flex self-start"
                    />
                    <div className=" flex flex-col gap-1 justify-center">
                      <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                        {item.title}
                      </h5>
                      <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-2">
                        {item.subtitle}
                      </p>
                      <p className="  font-poppins text-sm">
                        {item.btn}{" "}
                        <span>
                          <ChevronRightIcon
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-[11px] ml-2 h-[11px] inline-block"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-28">
            <h3 className=" mb-5 text-[0.8rem] font-poppins font-medium">
              Productivity
            </h3>
            <div className=" grid grid-cols-3 gap-x-6 gap-y-8">
              {productivity.map((item) => (
                <motion.div
                  initial={{ x: "15vw", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className=" border flex items-center px-3 rounded-[15px] h-36"
                >
                  <div className=" flex justify-between gap-x-3 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      className=" flex self-start"
                    />
                    <div className=" flex flex-col gap-1 justify-center">
                      <h5 className=" text-skin-black font-bold text-[0.7rem] font-poppins">
                        {item.title}
                      </h5>
                      <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-2">
                        {item.subtitle}
                      </p>
                      <p className="  font-poppins text-sm">
                        {item.btn}{" "}
                        <span>
                          <ChevronRightIcon
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-[11px] ml-2 h-[11px] inline-block"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <footer className="  bg-skin-footer font-poppins w-full ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default ProductScreen;
