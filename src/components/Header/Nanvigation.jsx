import { useState } from "react";
import Logo from "/public/imgs/Frame 61.png";
import { Twirl as Hamburger } from "hamburger-react";
import LOGO2 from "/public/imgs/TRANSFORM WITH TUNA.png";
import Stories from "../../pages/Stories";
import { Link } from "react-router-dom";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/Stories" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4">
        <img className="block lg:hidden" src={LOGO2} alt="" />
        <img className="hidden lg:block" src={Logo} alt="Logo" />

        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="white"
          />
        </div>
        <div className="hidden lg:block">
          <ul className=" top-[38px] right-12 text-red-500 flex gap-4 bg-[#222] py-[0.62rem] rounded-[12.5rem] px-5 border-[#4D4D4D] z-10">
            {navItems.map(({ name, path }) => {
              const isActive = location.pathname === path;

              return (
                <Link
                  key={name}
                  to={path}
                  // onClick={handleNavClick}
                  className={`font-Nunito text-[1rem] font-[700] leading-normal ${
                    isActive ? "text-black" : "text-white"
                  }`}
                >
                  <li
                    className={`flex justify-center items-center gap-2 h-[3rem] px-6 transition-colors duration-700 rounded-[2.875rem] hover:bg-gray-500 cursor-pointer ${
                      isActive ? "bg-[#D7FD44]" : "bg-transparent"
                    }`}
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute h-[570px] top-0 left-0 w-full bg-black text-white p-4 transform transition-transform duration-500 lg:hidden z-50`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-4">
            {/* <img src={LOGO2} alt="Mobile Logo" className="w-32" /> */}

            <div className="flex flex-col items-center gap-1">
              <span className="bg-gradient-to-transparent bg-clip-text  text-[#cef533] text-[1.35rem] text-center">
                TRANSFORM
              </span>
              <span className="bg-gradient-to-transparent bg-clip-text  text-[#cef533]  text-[1.35rem] text-center">
                WITH TUNA
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-xl"
            >
              ✕
            </button>
          </div>

          {/* Navigation Items */}
          <ul className="flex flex-col  pt-[40px]  items-center gap-[24px]">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="font-bold hover:bg-white p-[10px] pr-[20px] pl-[20px] rounded-[20px] text-lg hover:text-yellow-400"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
