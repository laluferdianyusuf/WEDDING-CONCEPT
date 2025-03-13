import React from "react";
import { TbHome } from "react-icons/tb";
import { PiImages, PiEnvelopeOpenLight, PiMapPinArea } from "react-icons/pi";

export default function Menubar() {
  return (
    <div className="fixed bottom-5 px-7 rounded-2xl left-1/2 -translate-x-1/2 py-2 bg-[#ffdbe1] shadow flex gap-7 w-[90%] items-center justify-between z-20">
      <a className="cursor-pointer" href="#main">
        <TbHome size={30} color="white" />
      </a>
      <a href="#gallery" className="cursor-pointer">
        <PiImages size={30} color="white" />
      </a>
      <a className="cursor-pointer" href="#message">
        <PiEnvelopeOpenLight size={30} color="white" />
      </a>
      <a className="cursor-pointer" href="#location">
        <PiMapPinArea size={30} color="white" />
      </a>
    </div>
  );
}
