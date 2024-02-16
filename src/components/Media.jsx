import { useEffect, useState } from "react";

const Media = () => {
  const [focuss, setFocus] = useState(false);
  const [focuss1, setFocus1] = useState(false);

  // console.log(see);
  useEffect(() => {
    setTimeout(() => {
      setFocus(true);
    }, 3000);
  }, []);
  console.log(focuss1);
  return (
    <div
      className={`  w-16 h-96 m-0 p-0 fixed z-50 block transition-all duration-1000 group  bottom-10  ${
        focuss ? "left-0" : "-left-20"
      } `}
    >
      <div
        className={` w-10 text-sm -bottom-10 z-50 relative transition-all duration-1000 ${
          focuss1 ? "-left-20" : "left-0"
        }`}
      >
        <p className=" bg-white p-1">share</p>
        <img title="facebook" src="/facebook.png" width={50} height={40}></img>
        <img title="tweet" src="/twiter.png" width={50} height={40}></img>
        <img title="email" src="/email.jpg" width={50} height={40}></img>
        <img title="whatsAap" src="/whatsap.png" width={50} height={40}></img>
      </div>
      <div
        onClick={() => setFocus1(!focuss1)}
        className=" w-10 -bottom-10 z-50  group-hover:left-0 duration-500 transition-all relative -left-10  bg-gray-400"
      >
        {focuss1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 pt-1  float-right cursor-pointer bg-gray-400 w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-5 pt-1 float-right cursor-pointer bg-gray-400 w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Media;
