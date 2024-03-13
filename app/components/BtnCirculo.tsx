"use client";
import { IconType } from "react-icons";

interface BtnCirculoProps {
    icon: IconType;
}

const BtnCirculo: React.FC<BtnCirculoProps> = ({
    icon: Icon
}) => {
  return (
    <div className="
        w-8
        h-8
        rounded-full
        border-[1px]
        border-neutral-400
        flex
        absolute
        items-center
        justify-center
        text-neutral-600
        cursor-pointer
        hover:opacity-80
        transition
        bg-white  
    ">
      <Icon />
    </div>
  );
};

export default BtnCirculo;
