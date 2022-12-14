import elizabeth from '../../../../shared/assets/elizabeth.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../../../../hooks';
import { Div, Image, Span } from '../../atoms';

export const NavigationBar = () => {
   const navigate = useNavigate();
   const platform = usePlatform();

   return (
      <Div className='navbar navbar-dark bg-dark'>
         <Div className={`container ${platform === 'mobile' ? 'justify-content-center' : ''}`}>
            <Div className='navbar-brand text-center cursor-pointer d-flex align-items-center'
                 onClick={() => navigate('/')}>
               <Image sourceImageUrl={elizabeth} width='40' height='40'
                      className='d-inline-block align-top' alternativeText='elizabeth'/>
               <Span className='studio-vn21-brand ms-2'>Studio VN21</Span>
            </Div>
         </Div>
      </Div>
   );
};