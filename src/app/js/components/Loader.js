import React, { } from "react";
import LoaderImg from '../../style/images/Loader.svg';


export default function Loader() {

  return (
    <>
     <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <img className="img-fluid" src={LoaderImg} />
      <h4>Loading...</h4>
     </div>
    </>
  ); 
}
