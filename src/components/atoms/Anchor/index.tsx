import React from 'react';
import {IAnchor} from "../../../interfaces";

export const Anchor = ({destinationUrl, onClick, children, ...rest}: IAnchor) => {
   return (
      <a {...rest} href={destinationUrl} target="_blank" onClick={onClick} className="text-decoration-none" rel="noreferrer">
         {children}
      </a>
   )
}