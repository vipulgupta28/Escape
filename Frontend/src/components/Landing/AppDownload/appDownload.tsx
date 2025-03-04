import { useRef, useEffect, useState } from "react";
import React from "react";

const AppDownload: React.FC = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [isEnter, setIsEnter] = useState(false);
  const [isQRVisible, setIsQRVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const BASE_SIZE = 250;

  // Capture initial mouse position when component mounts
  useEffect(() => {
    const handleInitialPosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleInitialPosition, { once: true });
    return () => window.removeEventListener("mousemove", handleInitialPosition);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (circleRef.current && isEnter) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        
        // Animation for size fluctuation
        const animateCircle = (time: number) => {
          if (circleRef.current) {
            const scale = 1 + Math.sin(time * 0.005) * 0.2; // Fluctuates between 0.8 and 1.2
            const offset = (BASE_SIZE * scale) / 2;
            circleRef.current.style.transform = `
              translate(${e.clientX - offset}px, ${e.clientY - offset}px) 
              scale(${scale})
            `;
            animationFrameId = requestAnimationFrame(animateCircle);
          }
        };
        
        animationFrameId = requestAnimationFrame(animateCircle);
      }
    };

    if (isEnter) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isEnter]);

  return (
    <div 
      className="h-150 mb-20 flex flex-col items-center text-center relative"
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => {
        setIsEnter(false);
        setIsQRVisible(false); // Ensure QR code disappears when mouse leaves the main container
      }}
    >
      <h1 className="text-6xl font-bold pt-10 relative text-white mix-blend-difference">
        Scan & Download
      </h1>
      <p className="text-gray-400 mt-5">Download our App and rent anytime anywhere</p>

      <div className="relative mt-50">
  <div className="relative inline-block">
    <h1 className="text-white text-6xl font-bold px-6 py-4">
      Coming Soon
    </h1>
    {/* Top-left and bottom-right corners */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white" />
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white" />
    {/* Top-right and bottom-left corners */}
    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white" />
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white" />
  </div>
</div>

      {isEnter && (
        <div
          ref={circleRef}
          className="w-[250px] h-[250px] bg-white rounded-full fixed pointer-events-none border border-black mix-blend-difference flex items-center justify-center"
          onMouseEnter={() => setIsQRVisible(true)}
          onMouseLeave={() => setIsQRVisible(false)}
          style={{
            left: 0,
            top: 0,
            transform: `translate(${mousePosition.x - BASE_SIZE / 2}px, ${mousePosition.y - BASE_SIZE / 2}px)`,
          }}
        >
          {/* QR Code inside the circle, visible only when hovered */}
          {isQRVisible && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              alt="QR Code"
              className="w-[150px] h-[150px] object-contain color-white"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AppDownload;