import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
   sortOnClick: (name:string) => void;
}
function TableHeader({sortOnClick}:Props) {

   return (
      <Wrapper>

      <StyledCheckbox onClick={()=>{}}></StyledCheckbox>

      <Container>
         <Item onClick={()=>{sortOnClick('title')}}>Title</Item>
         <Item onClick={()=>{sortOnClick('state')}}>State</Item>
         <Item onClick={()=>{sortOnClick('viewed')}}>Viewed</Item>
         <Item onClick={()=>{sortOnClick('answered')}}>Answered</Item>
         <Item onClick={()=>{sortOnClick('folder')}}>Folder</Item>
         <Item onClick={()=>{sortOnClick('created')}}>Created</Item>
         <Item onClick={()=>{sortOnClick('validUntil')}}>Valid until</Item>
         <Item onClick={()=>{}}>Created by</Item>
         </Container>
      </Wrapper>
         
   );
}
const Container = styled.div`
   display: flex;
   flex-direction: row;
   background-color: #222533;
   height: 1em;
   align-items: center;
   justify-content: space-evenly;
   width: 1000px;
   color: #5f5f64;
`;

const StyledCheckbox = styled.div`
   width: 20px;
   height: 20px;
   border: 1px dashed #3e2b4c;
   border-radius: 3px;
   margin: 0 10px 0 0;
`;
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 30px 0 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-weight: lighter;
  font-size: 12px;
  /* margin-left: 3px; */
  color: #146586;

`;

const Item = styled.div`
   color: #5f5f64;
   font-size: 13px;
   cursor: pointer;
`;

export default TableHeader;
