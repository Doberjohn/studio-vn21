import React from 'react';

interface ImageProps extends
   React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
   sourceImageUrl: string;
   alternativeText: string;
}

export const Image = ({ sourceImageUrl, alternativeText, ...rest }: ImageProps) => {
   return (
      <img src={sourceImageUrl} alt={alternativeText} {...rest}/>
   );
};