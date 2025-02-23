import { useRef, useEffect, useState } from "react";
import React from "react";


const AppDownload: React.FC = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [isEnter, setIsEnter] = useState(false);
  const [isQRVisible, setIsQRVisible] = useState(false);

  const CIRCLE_SIZE = 250;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (circleRef.current) {
        requestAnimationFrame(() => {
          circleRef.current.style.transform = `translate(${e.clientX - CIRCLE_SIZE / 2}px, ${e.clientY - CIRCLE_SIZE / 2}px)`;
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-150 mb-20 flex flex-col items-center text-center  relative"
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}>

      <h1 className="text-6xl font-bold pt-10 relative text-white mix-blend-difference">
        Scan & Download
      </h1>
      <p className="text-gray-400 mt-5">Download our App and rent anytime anywhere</p>

      <div className="mt-30  opacity0 h-35 w-35  ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"/>
        </div>    

      {isEnter && (
        <div
          ref={circleRef}
          className="w-[250px] h-[250px] bg-white rounded-full fixed pointer-events-none border border-black mix-blend-difference"
          onMouseEnter={() => setIsQRVisible(true)}
          onMouseLeave={() => setIsQRVisible(false)}
          style={{
            left: 0,
            top: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};

export default AppDownload;
