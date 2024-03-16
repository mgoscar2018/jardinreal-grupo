"use client";
import React, { useRef, useState } from 'react';
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

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Button from "../Button";
import BtnCirculo from "../BtnCirculo";

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
  let [irDerecha,setirDerecha] = useState(true);

  const scrollIzquierda = () => {
    if (barraRef.current) {
      barraRef.current.scrollLeft -= 180;
      setirDerecha(true);
    }
  };

  const scrollDerecha = () => {
    if (barraRef.current) {
      barraRef.current.scrollLeft += 180;
      let maxScrollableWidth = barraRef.current.scrollWidth - barraRef.current.clientWidth - 1;
      if (barraRef.current.scrollLeft > maxScrollableWidth)
        setirDerecha(false);
    }
  };

  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    //Container = Wrapper
    // <Container>
    //   <div className="flex place-content-between gap-4 items-center">
    //     <div className="
    //       flex
    //       relative
    //       items-center
    //       whitespace-nowrap
    //       overflow-x-auto
    //     ">
    //       {/* Botón izquierdo */}
    //       <div className="flex absolute h-full w-12 items-center bg-gradient-to-r from-white to-transparent">
    //         <BtnCirculo icon={SlArrowLeft} onClick={scrollIzquierda}/>
    //       </div> 

    //       {/* Contenedor de iconos */}            
    //       <div className="flex flex-row items-center justify-between" ref={barraRef}>
    //         {categories.map((item) => (
    //           <CategoryBox
    //             key={item.label}
    //             label={item.label}
    //             icon={item.icon}
    //             selected={category === item.label}
    //           />
    //         ))} 
    //       </div>
          
    //       {/* Botón derecho */}
    //       <div className="flex items-center absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white to-transparent">
    //         <BtnCirculo icon={SlArrowRight} onClick={scrollDerecha}/>
    //       </div>
          
    //     </div>
        
    //   </div>      
      
    // </Container>
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
                <BtnCirculo icon={SlArrowLeft} onClick={scrollIzquierda} />
              </div>
            )}

            {/* Contenedor de iconos */}
            <div className="flex items-center scroll-smooth overflow-hidden" ref={barraRef}>
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
            { irDerecha && (
              <div className="boton-derecho flex items-center absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent">
                <BtnCirculo icon={SlArrowRight} onClick={scrollDerecha} />
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