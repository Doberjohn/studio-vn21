import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Div } from '../../atoms';

export const WelcomeSection: React.FC = () => {
   const navigate = useNavigate();

   return (
      <Div className='perfectly-centered full-height flex-column text-center'>
         <Div className='h1 mb-4'>
            Welcome to Studio VN21
         </Div>
         <Div className='h5 mb-5'>
            The best place to read short stories online
         </Div>
         <Button
            className='btn btn-light btn-lg'
            onClick={() => navigate('/browse')}>
            Start reading now
         </Button>
      </Div>
   );
};