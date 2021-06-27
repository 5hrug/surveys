import React from 'react';
import styled from 'styled-components';
function TableHeade() {
  const handleClickSort = () => {
     
   };
   return (
      <Container>
         <Title
            onClick={handleClickSort}>
            daco
         </Title>
         <State>daco</State>
         <Viewed>daco</Viewed>
         <Answered>daco</Answered>
         <Folder>daco</Folder>
         <Created>daco</Created>
         <ValidUntil>daco</ValidUntil>
      </Container>
   );
}
const Container = styled.div`
   display: flex;
   flex-direction: row;
   background-color: #222533;
   height: 3em;
   align-items: center;
   justify-content: space-evenly;
   width: 1000px;
   margin: 10px 0;
   border: 1px dashed #3e2b4c;
   color: #5f5f64;
`;

const Title = styled.div`
   color: #5f5f64;
`;
const State = styled.div`
   color: #5f5f64;
`;
const Viewed = styled.div`
   color: #5f5f64;
`;
const Answered = styled.div`
   color: #5f5f64;
`;
const Folder = styled.div`
   color: #5f5f64;
`;
const Created = styled.div`
   color: #5f5f64;
`;
const ValidUntil = styled.div`
   color: #5f5f64;
`;
export default TableHeade;
