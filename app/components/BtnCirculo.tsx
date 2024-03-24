"use client";
import React from "react";
import { IconType } from "react-icons";

interface BtnCirculoProps {
  icon: IconType;
  onClick: () => void;
  className?: string; // Asegúrate de que esta línea esté presente
  style?: React.CSSProperties; // Añade esta línea para permitir estilos en línea
}


const BtnCirculo: React.FC<BtnCirculoProps> = ({
    icon: Icon,
    onClick
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
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
        hover:bg-sky-800/[.54]
        transition
        bg-white
      `}      
    >
      <Icon />
    </button>
  );
};

export default BtnCirculo;
