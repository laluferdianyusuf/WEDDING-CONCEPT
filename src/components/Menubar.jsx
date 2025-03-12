import React from "react";
import { TbHome } from "react-icons/tb";
import { PiImages, PiEnvelopeOpenLight, PiMapPinArea } from "react-icons/pi";

export default function Menubar() {
  return (
    <div className="absolute bottom-5 px-5 rounded-xl py-2 bg-amber-950 flex gap-7">
      <button className="cursor-pointer">
        <TbHome size={30} color="white" />
      </button>
      <button className="cursor-pointer">
        <PiEnvelopeOpenLight size={30} color="white" />
      </button>
      <button className="cursor-pointer">
        <PiImages size={30} color="white" />
      </button>
      <button className="cursor-pointer">
        <PiMapPinArea size={30} color="white" />
      </button>
    </div>
  );
}
