'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Frente a la playa',
    icon: TbBeach,
    description: '¡Esta propiedad está cerca de la playa!',
  },
  {
    label: 'Molino de Viento',
    icon: GiWindmill,
    description: '¡Esta propiedad es un molino de viento!',
  },
  {
    label: 'Moderna',
    icon: MdOutlineVilla,
    description: '¡Esta propiedad es moderna!'
  },
  {
    label: 'Casa de campo',
    icon: TbMountain,
    description: '¡Esta propiedad está en el campo!'
  },
  {
    label: 'Alberca',
    icon: TbPool,
    description: '¡Esta propiedad cuenta con piscina!'
  },
  {
    label: 'Isla',
    icon: GiIsland,
    description: '¡Esta propiedad está en una isla'
  },
  {
    label: 'En el lago',
    icon: GiBoatFishing,
    description: '¡Esta propiedad está cerca de un lago!'
  },
  {
    label: 'Pista de esquí',
    icon: FaSkiing,
    description: '¡Esta propiedad tiene actividades para esquiar!'
  },
  {
    label: 'Castillo',
    icon: GiCastle,
    description: '¡Esta propiedad es un castillo!'
  },
  {
    label: 'Cueva',
    icon: GiCaveEntrance,
    description: '¡Esta propiedad está en una caverna!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: '¡Esta propiedad ofrece actividades para acampar!'
  },
  {
    label: 'Ártico',
    icon: BsSnow,
    description: '¡Esta propiedad está en un entorno ártico!'
  },
  {
    label: 'Desierto',
    icon: GiCactus,
    description: '¡Esta propiedad está en un entorno desértico!'
  },
  {
    label: 'Granero',
    icon: GiBarn,
    description: '¡Esta propiedad es un granero!'
  },
  {
    label: 'Lujosa',
    icon: IoDiamond,
    description: '¡Esta propiedad es nueva y lujosa!'
  }  
]

const Categories = () => {
  
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
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
    </Container>
  );
}
 
export default Categories;