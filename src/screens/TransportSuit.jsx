import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

const TransportSuit = () => {
  return (
    <main>
      <Navbar />
      <Wrapper className=" border-2 w-[56rem] mt-12 mb-12">
        <div className="mt-16 grid grid-cols-2 place-items-center">
          <div className="mb-16">
            <p className=" font-poppins text-skin-blue text-[0.8rem] pb-4 leading-loose">
              Plan, execute & optimize for timely delivery of goods
            </p>
            <p className=" font-poppins text-skin-black text-[1.3rem]  font-bold">
              Simple and complete cloud-base transport management software
            </p>
            <div className=" flex gap-10 w-[19rem] mt-7 ">
              <button className=" hover:-translate-y-1.5 hover:bg-gradient-to-r from-green-300 to-green-400  transition duration-300 ease-linear font-poppins text-sm w-full rounded-[5px] text-skin-white h-11 shadow-md bg-skin-blue">
                Get Started
              </button>
              <button className=" hover:-translate-y-1.5 hover:bg-gradient-to-r from-green-300 to-green-400  transition duration-300  hover:text-skin-white font-poppins w-full text-sm rounded-[5px] text-skin-black h-11 shadow-2xl bg-skin-main">
                Contact Sales
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-9 items-center justify-center">
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src="/monitor.png"
                alt="monitor"
              />
            </div>
            <div className="flex gap-5 ">
              <img width={150} height={130} src="/googlei.png" alt="google" />
              <img
                width={150}
                height={150}
                src="/appstore.png"
                alt="appstore"
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="bg-[#fafafa]">
        <Wrapper className=" w-[52rem] border-2 mt-10">
          <div className=" text-center">
            <p className=" font-poppins text-skin-black text-[1.3rem]  font-bold">
              Give your team & business a 360° transformation
            </p>
            <p className=" font-poppins text-skin-blue text-[0.77rem] pb-4 leading-loose">
              Unite your team & assets all at one place, transport smarter and
              reveal new insights to stay ahead
            </p>
          </div>
        </Wrapper>
      </div>
    </main>
  );
};

export default TransportSuit;
