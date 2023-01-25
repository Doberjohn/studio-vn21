import { useEffect, useState } from 'react';

const calculatePlatform = () => {
   if (window.innerWidth > 1200) {
      return 'desktop';
   } else if (window.innerWidth >= 768) {
      return 'tablet';
   }
   return 'mobile';
};

export const usePlatform = () => {
   const [platform, setPlatform] = useState(calculatePlatform);

   const onResize = () => {
      setPlatform(calculatePlatform);
   };

   useEffect(() => {
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
   });

   return platform;
};