import React, { useState } from "react";
import Image from "../assets/images/hold.jpg";
import Hand from "../assets/images/hand.png";
import "./index.css";
export default function Cover({ closeModal }) {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
      }}
      className={` ${
        isClosing ? "translate-y-full" : "translate-y-0"
      } w-full h-screen absolute flex justify-center items-center z-50 transition-all backdrop-blur-lg bg-cover`}
    >
      <div className="border border-white w-[85%] h-[93vh] absolute z-30 "></div>
      <div className="border border-white w-[95%] h-[88vh] absolute z-30 "></div>
      <div className="h-[90vh] w-[90%] flex p-8 backdrop-blur-xs border justify-between border-white z-50 flex-col">
        <div className="flex flex-col">
          <img src={Hand} alt="" className="self-center" />
          <div className="pt-16 pb-14">
            <h1 className={`font-[Amsterdam] text-7xl text-black`}>Aku</h1>
            <h1
              className={`font-[Amsterdam] text-5xl text-center text-black py-7`}
            >
              &
            </h1>
            <h1 className={`font-[Amsterdam] text-7xl text-end text-black`}>
              Dia
            </h1>
          </div>
          <div className="font-[Alta] text-center text-black">
            <p className="text-3xl">save the date</p>
            <p className="text-2xl">08 May 2026</p>
            <p className="text-xl">09 AM</p>
            <p className="text-xl">Jl. TGH. Faisal, No. 114</p>
          </div>
        </div>
        <button
          className="font-[Alta] self-center justify-end bg-blue-300 rounded-md px-3 text-black text-end cursor-pointer z-50"
          onClick={handleClose}
        >
          CIHUYYY
        </button>
      </div>
    </div>
  );
}
