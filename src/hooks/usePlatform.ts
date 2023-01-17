import { useEffect, useState } from 'react';

const calculatePlatform = () => {
   if (window.innerWidth > 1200) {
      return 'desktop';
   } else if (window.innerWidth > 600) {
      return 'tablet';
   }
   return 'mobile';
};

export const usePlatform = () => {
   const [platform, setPlatform] = useState(calculatePlatform);

   const updateMedia = () => {
      setPlatform(calculatePlatform);
   };

   useEffect(() => {
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
   });

   return platform;
};