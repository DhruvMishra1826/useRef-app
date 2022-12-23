import { useState, useEffect, useReducer } from "react";
import styled from "styled-components"; 

function Modal({name,city,hobby,college}) {
  const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
  `;

  const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
  `;
  
  const [shouldShow, setshouldShow] = useState(true);

  return (
    <> 

        {shouldShow && (
        <ModalBackground onClick={()=> setshouldShow(false)}>
            <ModalBody onClick={(e)=>e.stopPropagation()}>
                   
                   <h1>Hi {name}!! i am dhruv, it's nice to be your friend. You are from {city} and i also like your {hobby}. Btw, your college, {college} is very nice</h1>

                   <button onClick={()=>setshouldShow(false)} style={{borderRadius: "5px"}}>Hide Please</button>
            </ModalBody>
        </ModalBackground>
        )}
    </>
  );
}

export default Modal;
