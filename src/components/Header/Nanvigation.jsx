import React, { useState } from "react";
import Logo from "/public/imgs/Frame 61.png";
import { Twirl as Hamburger } from "hamburger-react";
import LOGO2 from "/public/imgs/TRANSFORM WITH TUNA.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <div className="relative">
      {/* LOGO2 (Always Visible) */}

      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {/* Main Logo for Desktop */}
        <img className="block lg:hidden" src={LOGO2} alt="" />
        <img className="hidden lg:block" src={Logo} alt="Logo" />

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="black"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <a
                href={path}
                className="font-Nunito font-bold text-lg hover:text-yellow-400"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sliding Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-0 left-0 w-full bg-black text-white p-4 transform transition-transform duration-500 lg:hidden z-50`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-4">
            {/* <img src={LOGO2} alt="Mobile Logo" className="w-32" /> */}

            <div className="flex flex-col items-center gap-1">
              <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[#cef533] text-[1.35rem] text-center">
                TRANSFORM
              </span>
              <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[#cef533]  text-[1.35rem] text-center">
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
          <ul className="flex flex-col items-center gap-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="font-bold text-lg hover:text-yellow-400"
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
