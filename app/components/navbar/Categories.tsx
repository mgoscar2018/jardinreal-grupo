"use client";

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import BtnCirculo from "../BtnCirculo";

import React, { useRef, useState, useEffect } from 'react';
import useScroll from '@/app/hooks//useScroll'; // Importamos el hook useScroll
import { toast } from 'react-hot-toast';

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { IoOptionsOutline } from "react-icons/io5";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import Container from "../Container";


import Button from "../Button";


export const categories = [
  {
    label: "Frente a la playa",
    icon: TbBeach,
    description: "¡Esta propiedad está cerca de la playa!",
  },
  {
    label: "Molino de Viento",
    icon: GiWindmill,
    description: "¡Esta propiedad es un molino de viento!",
  },
  {
    label: "Moderna",
    icon: MdOutlineVilla,
    description: "¡Esta propiedad es moderna!",
  },
  {
    label: "Casa de campo",
    icon: TbMountain,
    description: "¡Esta propiedad está en el campo!",
  },
  {
    label: "Alberca",
    icon: TbPool,
    description: "¡Esta propiedad cuenta con piscina!",
  },
  {
    label: "Isla",
    icon: GiIsland,
    description: "¡Esta propiedad está en una isla",
  },
  {
    label: "En el lago",
    icon: GiBoatFishing,
    description: "¡Esta propiedad está cerca de un lago!",
  },
  {
    label: "Pista de esquí",
    icon: FaSkiing,
    description: "¡Esta propiedad tiene actividades para esquiar!",
  },
  {
    label: "Castillo",
    icon: GiCastle,
    description: "¡Esta propiedad es un castillo!",
  },
  {
    label: "Cueva",
    icon: GiCaveEntrance,
    description: "¡Esta propiedad está en una caverna!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "¡Esta propiedad ofrece actividades para acampar!",
  },
  {
    label: "Ártico",
    icon: BsSnow,
    description: "¡Esta propiedad está en un entorno ártico!",
  },
  {
    label: "Desierto",
    icon: GiCactus,
    description: "¡Esta propiedad está en un entorno desértico!",
  },
  {
    label: "Granero",
    icon: GiBarn,
    description: "¡Esta propiedad es un granero!",
  },
  {
    label: "Lujosa",
    icon: IoDiamond,
    description: "¡Esta propiedad es nueva y lujosa!",
  },
];

const Categories = () => {
  const barraRef = useRef<HTMLDivElement>(null);
  const isScrolling = useScroll(barraRef);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  let [irDerecha,setirDerecha] = useState(true);

 

  const onArrowClick = (direction: 'left' | 'right') => {
    const { current: barra } = barraRef;
    if (barra) {
      const scrollAmount = direction === 'left' ? -180 : 180;
      barra.scrollLeft += scrollAmount;
      if (direction === 'left') {
        setirDerecha(true);
      } else {
        let maxScrollableWidth = barra.scrollWidth - barra.clientWidth - 1;
        if (barra.scrollLeft > maxScrollableWidth)        
          setirDerecha(false);        
      }      
    }
  };
  
  
 
  const startDragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del navegador
    setIsDragging(true);
    setStartX(e.pageX - (barraRef.current?.offsetLeft ?? 0));
    setScrollLeft(barraRef.current?.scrollLeft ?? 0);
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging || !barraRef.current) return;
    const x = e.pageX - (barraRef.current.offsetLeft ?? 0);
    const walk = (x - startX) * 2; // Increase scroll speed
    barraRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="wrapper grid grid-cols-7 gap-4 items-center w-full
        
      ">
        <div className='col-span-6'>
          <div className="contenedor-iconos 
            flex
            relative
            items-center
            whitespace-nowrap
            "
          >
            {/* Botón izquierdo */}
            {isScrolling && barraRef.current && barraRef.current.scrollLeft > 0 && (
              <div className="boton-izquierdo absolute top-0 left-0 h-full w-12 flex items-center bg-gradient-to-r from-white to-transparent">
                <BtnCirculo icon={SlArrowLeft} onClick={() => onArrowClick('left')} />
              </div>
            )}

            {/* Contenedor de iconos */}
            <div ref={barraRef}
              className={`flex gap-3 list-none overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={startDragging}
              onMouseMove={onDrag}
              onMouseLeave={stopDragging}
              onMouseUp={stopDragging}
            >
              {categories.map((item) => (
                <CategoryBox
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  selected={category === item.label}
                />
              ))}
            </div>
            
            {/* Botón derecho */}
            { (barraRef.current && barraRef.current.scrollLeft < (barraRef.current.scrollWidth - barraRef.current.clientWidth - 1) || irDerecha)  && (
              <div className="boton-derecho flex items-center absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent">
                <BtnCirculo icon={SlArrowRight} onClick={() => onArrowClick('right')} />
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <Button
            outline
            label="Filtros"
            icon={IoOptionsOutline}
            onClick={() => {}}
          />          
        </div>
      </div>
    </Container>
  );
};

export default Categories;