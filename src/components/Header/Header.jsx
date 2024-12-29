import Nanvigation from "./Nanvigation";
// import Customersinfo from "./Customersinfo";

export default function Header() {
  return (
    <div className="relative w-full h-[85vh]">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-[50%] bg-[url('/imgs/mainImage-DPIYhi6G.jpeg')]"></div>

      {/* Content Layer */}
      <div className="relative h-[80%] z-10">
        <Nanvigation />
        <div className="flex justify-start pl-[100px] items-center h-[80%]">
          <h1 className="text-[48px] hidden lg:block  text-light-gradient font-extrabold font-openSans text-[#ffffffe5]">
            Stronger every day, <br /> inside and out
          </h1>
        </div>
      </div>

      {/* <Customersinfo /> */}
    </div>
  );
}
