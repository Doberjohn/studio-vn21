import React from 'react';

interface ImageProps extends
   React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
   sourceImageUrl: string;
   alternativeText: string;
}

const Image: React.FC<ImageProps> = ({ sourceImageUrl, alternativeText, ...rest }) => {
   return (
      <img src={sourceImageUrl} alt={alternativeText} {...rest}/>
   );
};

export default Image;