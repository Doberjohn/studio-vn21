import React from 'react';

interface ImageProps {
   sourceImageUrl: string;
   alternativeText: string;
   [x:string]: any;
}

export const Image = ({ sourceImageUrl, alternativeText, ...rest }: ImageProps) => {
   return (
      <img src={sourceImageUrl} alt={alternativeText} {...rest}/>
   );
};