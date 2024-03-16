import { useEffect, useState } from 'react';

// Hook personalizado para monitorear el desplazamiento horizontal
function useScroll(ref: React.RefObject<HTMLDivElement>) {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsScrolling(ref.current.scrollLeft !== 0);
      }
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);

  return isScrolling;
}

export default useScroll;
