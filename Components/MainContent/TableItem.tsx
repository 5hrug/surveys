import React from 'react';
import styled from 'styled-components';
import ThreeDots from './ThreeDots'

interface Props {
   title: string;
   state: 'Odesíla se' | 'Zpracovaná';
   viewed?: number;
   answered?: number;
   folder?: 'Unikátní' | 'Pravidelne';
   created?: Date;
   validUntil?: Date;
   styledImage?: any;
}
function TableItem(props: Props) {
   return (
      <Wrapper>
         <StyledCheckbox></StyledCheckbox>
         <Container>
            <Title>{props.title}</Title>
            <State>{props.state}</State>
            <Viewed>{props.viewed}</Viewed>
            <Answered>{props.answered}</Answered>
            <Folder>{props.folder}</Folder>
            <Created>{props.created?.getDate()}</Created>
            <ValidUntil>{props.validUntil?.getHours()}</ValidUntil>
            <StyledImage>{props.styledImage}</StyledImage>
       </Container>
       <ThreeDots/>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 20px;
`;
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
`;
const StyledCheckbox = styled.div`
   width: 20px;
   height: 20px;
   border: 1px dashed #3e2b4c;
   border-radius: 3px;
   margin: 0 10px 0 0;
`;

const Title = styled.div`
   color: #ffffff;
`;
const State = styled.div`
   color: #585860;
`;
const Viewed = styled.div`
   color: #66676c;
   font-weight: bold;
`;
const Answered = styled.div`
   color: #66676c;
   font-weight: bold;
`;
const Folder = styled.div`
   color: #585860;
`;
const Created = styled.div`
   color: #585860;
`;
const ValidUntil = styled.div`
   color: #585860;
`;
const StyledImage = styled.div``;

export default TableItem;
