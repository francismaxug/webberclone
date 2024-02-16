import { useState } from "react";
import { dropDown } from "../loops/imagesvg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const DropDown = () => {
  const [arr, setArr] = useState(dropDown.at(0));
  const [state, setState] = useState(0);

  const handleNum = (num) => {
    setArr(dropDown.at(num));
    setState(num);
  };
  console.log(arr);
  return (
    <>
      <div className="w-full border-t border-b h-10 flex items-center">
        <ul className=" flex gap-7 items-center ml-28 text-gray-400/90 font-poppins text-[0.75rem] font-medium cursor-pointer">
          <li
            onClick={() => handleNum(0)}
            className={` hover:text-skin-blue ${
              state === 0 ? "text-skin-blue" : ""
            }`}
          >
            Human Resources
          </li>
          <li
            onClick={() => handleNum(1)}
            className={`hover:text-skin-blue ${
              state === 1 ? "text-skin-blue" : ""
            }`}
          >
            Finance
          </li>
          <li
            onClick={() => handleNum(2)}
            className={`hover:text-skin-blue ${
              state === 2 ? "text-skin-blue" : ""
            }`}
          >
            Inventory
          </li>
          <li
            onClick={() => handleNum(3)}
            className={`hover:text-skin-blue ${
              state === 3 ? "text-skin-blue" : ""
            }`}
          >
            Transport
          </li>
          <li
            onClick={() => handleNum(4)}
            className={`hover:text-skin-blue ${
              state === 4 ? "text-skin-blue" : ""
            }`}
          >
            Sales
          </li>
          <li
            onClick={() => handleNum(5)}
            className={`hover:text-skin-blue ${
              state === 5 ? "text-skin-blue" : ""
            }`}
          >
            Marketing
          </li>
          <li
            onClick={() => handleNum(6)}
            className={`hover:text-skin-blue ${
              state === 6 ? "text-skin-blue" : ""
            }`}
          >
            Productivity
          </li>
        </ul>
      </div>
      <div className="w-full py-10 h-[15rem]">
        <div className=" grid grid-cols-5 ml-28 gap-7">
          <AnimatePresence>
            {arr.map((item, key) => (
              <motion.div
                initial={{ x: "20vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                exit={{ x: "40vw", opacity: 0, transition: { duration: 1 } }}
                key={key}
                className="flex items-center w-40"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  width={50}
                  height={50}
                  className=" flex self-start"
                />
                <div className=" flex ml-3 flex-col gap-2 justify-center">
                  <h5 className=" text-skin-gray font-bold text-xs font-poppins">
                    {item.title}
                  </h5>
                  <p className=" text-[11.8px] tracking-wide text-skin-gray font-poppins mb-4">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className=" group hover:bg-gradient-to-r from-green-300 to-green-400 bg-blue-700 w-full h-[3.2rem] mt-4 flex justify-center items-center">
        <Link
          to="/products"
          className=" flex justify-center font-poppins items-center w-full text-skin-white"
        >
          View all product
          <span>
            <ChevronRightIcon
              strokeWidth={4}
              stroke="currentColor"
              className="w-[12px] ml-1 group-hover:translate-x-1.5 transition-all duration-500 h-[12px]  inline-block"
            />
          </span>
        </Link>
      </div>
    </>
  );
};

export default DropDown;
