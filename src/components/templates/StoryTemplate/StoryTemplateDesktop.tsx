import { Div } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export const StoryTemplateDesktop: React.FC = () => {
   const navigate = useNavigate();

   useEffect(() => {
      navigate('/');
   }, []);

   return <Div/>;
};