import React from "react";
import {Div, Image, Span} from "../../atoms";
import {usePlatform} from "../../../hooks/usePlatform";
import {useNavigate} from "react-router-dom";

export const NavigationBar = () => {
   const navigate = useNavigate();
   const platform = usePlatform();
   const containerStyle = `container ${platform === 'mobile' ? 'justify-content-center' : ''} ps-0`;

   return (
      <Div className="navbar navbar-dark bg-dark">
         <Div className={containerStyle}>
            <Div className="navbar-brand text-center cursor-pointer" onClick={() => navigate('/')}>
               <Image src="https://studio-vn21.s3.eu-central-1.amazonaws.com/elizabeth_logo.png" width="30" height="30"
                      className="d-inline-block align-top" alternativeText="elizabeth_logo"/>
               <Span className="studio-vn21-brand ms-2">Studio VN21</Span>
            </Div>
         </Div>
      </Div>
   )
}