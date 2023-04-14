import React, { forwardRef } from "react";
import styled from "styled-components";

const LabelInputDiv = styled.div`
  flex-direction: column;
  display: flex;
  text-align: left;
`;

const InputTypeMovies = styled.input`
  width: 50vw;
  height: 5vh;
  box-shadow: 8px 9px 6px -3px rgba(0, 0, 0, 0.29); 
  border-style: none;
`;

const Label = styled.label`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
color: #475757;
`;
const Input= forwardRef((props,ref)=>{
  return (
 <>
    <LabelInputDiv>
      <Label>{props.labelText}</Label>
      <InputTypeMovies type={props.type} ref={ref} />
    </LabelInputDiv>
 </>
  );
})


export default Input;



//https://AnarbekIshembekUulu.github.io/Hm-7