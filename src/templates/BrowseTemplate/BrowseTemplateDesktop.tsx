import { Div } from '../../components/atoms';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export const BrowseTemplateDesktop: React.FC = () => {
   const navigate = useNavigate();

   useEffect(() => {
      navigate('/');
   }, []);

   return <Div/>;
};