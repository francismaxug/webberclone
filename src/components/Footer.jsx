import { foot } from "../links/links";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className=" flex justify-evenly w-full flex-wrap py-10"
      >
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Human Resource
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide cursor-pointer">
            <li>Payroll</li>
            <li>Shift</li>
            <li>Core HR</li>
            <li>Recruitment</li>
            <li>Employees</li>
            <li>Attendance</li>
          </ul>
        </div>
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Finance
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide">
            <li>Invoicing</li>
            <li>Expenses</li>
            <li>Accounting</li>
          </ul>
        </div>
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Inventory
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide">
            <li>Stock</li>
            <li>Purchases</li>
          </ul>
        </div>
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Transport
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide">
            <li>Consengment</li>
            <li>Fleet</li>
            <li>Tire</li>
          </ul>
        </div>
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Sales
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide">
            <li>Quotation</li>
            <li>Point-of-sale</li>
          </ul>
        </div>
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Marketing
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide">
            <li>SMS</li>
          </ul>
        </div>
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Productivity
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide">
            <li>File Manger</li>
            <li>Sign</li>
          </ul>
        </div>
        <div>
          <p className=" font-poppins font-semibold text-[16px] text-skin-white mb-5">
            Related Links
          </p>
          <ul className="space-y-6 text-gray-300 font-poppins font-light text-[12px] tracking-wide">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </motion.div>
      <div className=" bg-skin-footer1 w-full h-[3.2rem] mt-4 flex justify-between px-20 items-center">
        <div className=" flex gap-1 items-center">
          <img
            src="/weberimage.jpg"
            width={33}
            height={33}
            alt="webberlogo"
            className="rounded-[0.8rem] bg-skin-white "
          />
          <h6 className=" font-semibold text-[16px] text-skin-white font-poppins">
            WEBBERMILL
          </h6>
        </div>
        <ul className="flex space-x-3 text-gray-300 font-poppins font-light text-[13px]">
          {foot.map((item) => (
            <li key={item.name}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
