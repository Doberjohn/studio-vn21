import React from "react";
import {Div, Image, Span} from "../../atoms";
import {usePlatform} from "../../../hooks/usePlatform";
import {useNavigate} from "react-router-dom";

export const NavigationBar = () => {
   const platform = usePlatform();
   let navigate = useNavigate();

   return (
      <Div className="navbar navbar-dark bg-dark">
         <Div className={`container ${platform === 'mobile' ? 'justify-content-center' : ''} ps-0`}>
            <Div className="navbar-brand text-center cursor-pointer" onClick={() => navigate('/')}>
               <Image src="https://studio-vn21.s3.eu-central-1.amazonaws.com/elizabeth_logo.png" width="30" height="30"
                      className="d-inline-block align-top" alternativeText="elizabeth_logo"/>
               <Span className="ms-3">Studio VN21</Span>
            </Div>
         </Div>
      </Div>
   )
}