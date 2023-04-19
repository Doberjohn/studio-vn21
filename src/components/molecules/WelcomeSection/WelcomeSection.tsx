import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Div } from '../../atoms';

interface WelcomeSectionProps {
   canStartReading?: boolean;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ canStartReading = true }) => {
   const navigate = useNavigate();

   return (
      <Div className='perfectly-centered full-height flex-column'>
         <Div className='h1 mb-2'>
            Welcome to Studio VN21
         </Div>
         <Div className='h5 mb-5'>
            The best place to read short stories online
         </Div>
         {canStartReading ? (
            <Button
               className='btn btn-light btn-lg'
               onClick={() => navigate('/browse')}>
               Start reading now
            </Button>
         ) : (
            <Div className='d-flex align-items-center'>
               <Div>
                  <i className='bi bi-exclamation-octagon-fill h2 me-3 text-warning'/>
               </Div>
               <Div>
                  <Div className='h5 mb-1'>
                     Only mobile devices are currently supported.
                  </Div>
                  <Div className='h5 mb-0'>
                     Desktop version is coming soon!
                  </Div>
               </Div>
            </Div>
         )}
      </Div>
   );
};