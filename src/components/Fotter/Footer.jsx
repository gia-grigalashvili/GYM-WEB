import Instagram from "/public/imgs/instagram.png";
import Facebook from "/public/imgs/facebook.png";
import Tiktok from "/public/imgs/tiktok.png";
import Twitter from "/public/imgs/tiw.png";
import Logo from "/public/imgs/Frame 61.png";
import { Link } from "react-router-dom";
export default function Footer() {
  const navNames = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];
  return (
    <div>
      <footer className="px-[2.5rem] py-[3rem] bg-[#242424] flex flex-col md:flex-row lg:flex-row justify-between gap-6">
        <div className="flex gap-4 md:items-center lg:items-center">
          <div className="flex flex-col items-center gap-1">
            <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
              TRANSFORM
            </span>
            <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
              WITH TUNA
            </span>
          </div>
          {<img src={Logo} alt="Muscle" />}
        </div>

        <div className="md:flex md:flex-col md:justify-center md:gap-8 lg:flex lg:flex-col lg:justify-center lg:gap-8">
          <div className="flex flex-col gap-2 md:flex-row md:gap-8 mb-4 md:mb-0 lg:mb-0">
            {navNames.map((item, index) => (
              <ul key={index}>
                <Link to={item.path}>
                  <li className="text-[#C4C4C4] text-[18px] hover:text-[#D7FD44] transition-transform hover:scale-125 duration-500">
                    {item.name}
                  </li>
                </Link>
              </ul>
            ))}
          </div>

          <div className="flex justify-center">
            <p className="text-[#C4C4C4] text-[0.625rem]">
              © 2024 Transform with Tuna. All rights reserved.
            </p>
          </div>
        </div>

        {
          <div className=" flex  gap-6">
            <img className="w-6 h-6" src={Facebook} alt="" />
            <img className="w-6 h-6" src={Instagram} alt="" />
            <img className="w-6 h-6" src={Tiktok} alt="" />
            <img className="w-6 h-6" src={Twitter} alt="" />
          </div>
        }
      </footer>
    </div>
  );
}
