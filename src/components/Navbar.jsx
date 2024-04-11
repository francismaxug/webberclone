/* eslint-disable react/prop-types */
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useState } from "react";
import DropDown from "./DropDown";

import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const displayShow = () => {
    setShow(!show);
    setShow1(false);
    setShow2(false);
  };
  const displayShow2 = () => {
    setShow2(!show2);
    setShow(false);
    setShow1(false);
  };
  const change = () => {
    setShow1(!show1);
    setShow(false);
    setShow2(false);
  };
  // const changeAll = () => {
  //   console.log(2);
  //   setShow1(false);
  //   setShow(false);
  // };
  return (
    <header className=" shadow-md fixed left-0 top-0 z-[999] right-0 bg-skin-main">
      <nav className="flex justify-between mx-24 py-[13px]">
        <div className=" flex justify-center items-center space-x-1">
          <img src="/weberimage.jpg" width={33} height={33} alt="webberlogo" />
          <h6 className=" font-semibold text-[16px] text-skin-blue font-poppins">
            WEBBERMILL
          </h6>
        </div>
        <ul className=" cursor-pointer   flex text-skin-gray/100 text-[14px] gap-[45px] justify-center items-center font-poppins tracking-wide">
          <li onClick={change} className={`${show1 ? "text-skin-blue" : ""}`}>
            PRODUCTS
            {show1 ? (
              <span>
                <ChevronUpIcon
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 ml-2 h-3 inline-block"
                />
              </span>
            ) : (
              <span>
                <ChevronDownIcon
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 ml-2 h-3 inline-block"
                />
              </span>
            )}
          </li>

          <NavLink to="/support">SUPPORT</NavLink>

          <li
            className={`relative ${show ? " text-skin-blue" : ""}`}
            onClick={displayShow}
          >
            RESOURCES{" "}
            {show ? (
              <span>
                <ChevronUpIcon
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 ml-2 h-3 inline-block"
                />
              </span>
            ) : (
              <span>
                <ChevronDownIcon
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 ml-2 h-3 inline-block"
                />
              </span>
            )}
            <AnimatePresence>
              {show && (
                <motion.ul
                  initial={{ y: "-8vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.7 },
                  }}
                  className={`absolute mt-6 font-poppins rounded-md p-5 z-50 w-[9rem] 
                 "block text-skin-gray bg-skin-main h-[10.5rem] shadow-md space-y-5`}
                >
                  <li>Blog</li>
                  <li>Events</li>
                  <li>Webnars</li>
                  <li>Partners</li>
                </motion.ul>
              )}
            </AnimatePresence>
            {/* <ul
              className={`absolute mt-6 font-poppins rounded-md p-5 z-50 w-[9rem] ${
                show ? "block text-skin-gray font-poppins" : "hidden"
              }  bg-skin-main h-[10.5rem] space-y-5`}
            >
              <li>Blog</li>
              <li>Events</li>
              <li>Webnars</li>
              <li>Partners</li>
            </ul> */}
          </li>
          <li
            className={`relative ${show2 ? " text-skin-blue" : ""}`}
            onClick={displayShow2}
          >
            More
            {show2 ? (
              <span>
                <ChevronUpIcon
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 ml-2 h-3 inline-block"
                />
              </span>
            ) : (
              <span>
                <ChevronDownIcon
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 ml-2 h-3 inline-block"
                />
              </span>
            )}
            <AnimatePresence>
              {show2 && (
                <motion.ul
                  initial={{ y: "-8vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.7 },
                  }}
                  className={`absolute mt-6 font-poppins rounded-md p-5 z-50 w-[9rem] 
                 "block text-skin-gray bg-skin-main h-8rem] shadow-md space-y-5`}
                >
                  <li>
                    <Link to="/about-us">About</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
            {/* <ul
              className={`absolute mt-6 font-poppins rounded-md p-5 z-50 w-[9rem] ${
                show ? "block text-skin-gray font-poppins" : "hidden"
              }  bg-skin-main h-[10.5rem] space-y-5`}
            >
              <li>Blog</li>
              <li>Events</li>
              <li>Webnars</li>
              <li>Partners</li>
            </ul> */}
          </li>
        </ul>
        <div className=" gap-x-4 flex">
          <Button className="btn-short">SIGN IN</Button>
          <div className="group">
            {" "}
            <Link>
              <Button className=" btn-long">
                SIGN UP FOR FREE{" "}
                <span>
                  <ChevronRightIcon
                    strokeWidth={4}
                    stroke="currentColor"
                    className="w-[11px] ml-2 h-[11px] inline-block  transition-all duration-300 ease-linear group-hover:translate-x-1"
                  />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {show1 && (
          <motion.ul
            initial={{ y: "-4vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: "-100vw", opacity: 0, transition: { duration: 0.7 } }}
            className={`bg-skin-main font-poppins ${
              show1
                ? "left-0 transition-all opacity-100  duration-700 ease-linear"
                : "-left-[90rem] transition-all opacity-0  duration-700 ease-linear"
            }  border-t w-full  border-b border-l border-r border-white absolute top-12 
          `}
          >
            {" "}
            <li>
              <DropDown />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
