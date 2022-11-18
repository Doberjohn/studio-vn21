import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../../../hooks/usePlatform';
import { Div, Image, Span } from '../../atoms';

export const NavigationBar = () => {
   const navigate = useNavigate();
   const platform = usePlatform();

   return (
      <Div className='navbar navbar-dark bg-dark'>
         <Div className={`container ${platform === 'mobile' ? 'justify-content-center' : ''}`}>
            <Div className='navbar-brand text-center cursor-pointer' onClick={() => navigate('/')}>
               <Image src='https://studio-vn21.s3.eu-central-1.amazonaws.com/elizabeth_logo.png' width='30' height='30'
                      className='d-inline-block align-top' alternativeText='elizabeth_logo'/>
               <Span className='studio-vn21-brand ms-2'>Studio VN21</Span>
            </Div>
         </Div>
      </Div>
   );
};