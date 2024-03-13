"use client";

interface CardProps {
  etiqueta: string;
}

const Card: React.FC<CardProps> = ({
  etiqueta
}) => {
  return (
    <div className="
      bg-red-500       
      h-20 
      grid 
      place-content-center 
      rounded-lg 
      text-white 
      font-bold 
      border-2 
      border-red-600 
      text-4xl;
      whitespace-nowrap
      overflow-auto 
  }
    ">
      {etiqueta}
    </div>
  );
};

export default Card;
