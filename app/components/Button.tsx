'use client';
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon
}) => {
    return ( 
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                flex
                place-content-center    
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition                
                w-full
                gap-2
                shadow-sm
                hover:shadow-md                
                ${outline ? 'bg-white' : 'bg-sky-800'}
                ${outline ? 'border-black' : 'border-sky-800'}
                ${outline ? 'text-black' : 'text-white'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
            `}
        >
            {Icon && (
                <Icon 
                    size={24}
                />
            )}
            <div className="hidden sm:block">{label}</div>            
        </button>
     );
}
 
export default Button;
