import Input from "./input";
import MapComponent from "./mapComponent";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-10 p-10">
      <div className="w-500">
        <MapComponent />
      </div>

      <div className="w-1/2">
        <Input />
      </div>
    </div>
  );
};

export default Hero;
