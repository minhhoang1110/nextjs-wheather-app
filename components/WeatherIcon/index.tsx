import Image from "next/image";
import React from "react";
interface Props {
  icon: string;
  size?: "large" | "medium" | "small";
}
const WeatherIcon: React.FC<Props> = ({ icon, size = "medium" }) => {
  const getSize = (): number => {
    switch (size) {
      case "small":
        return 30;
      case "medium":
        return 100;
      case "large":
        return 200;
      default:
        return 100;
    }
  };
  return (
    <div>
      <Image
        src={`/icons/${icon}.png`}
        alt=""
        width={getSize()}
        height={getSize()}
      />
    </div>
  );
};
export default WeatherIcon;
