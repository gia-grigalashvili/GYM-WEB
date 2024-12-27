import React from "react";
import Nanvigation from "./Nanvigation";
import backgorundimg from "/public/imgs/Rectangle 25.png";
export default function Header() {
  return (
    <div
    //   style={{
    //     backgroundImage: `url(${backgorundimg})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     height: "700px",
    //     width: "100%",
    //   }}
    >
      <Nanvigation />
      {/* <img src={backgorundimg} alt="" /> */}
    </div>
  );
}
