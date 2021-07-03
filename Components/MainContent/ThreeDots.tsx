import React from 'react';
import styled from 'styled-components';

interface Props {
   onClick?: () => void;
}

function ThreeDots({ onClick }: Props) {
   return (
         <Wrapper onClick={onClick}>
            <Dot />
            <Dot />
            <Dot />
         </Wrapper>
   );
}

const Wrapper = styled.a`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   padding: 10px;
`;

const Dot = styled.div`
   width: 4px;
   height: 4px;
   border-radius: 50%;
   background-color: #42465c;
   margin: 3px 0;
`;

export default ThreeDots;
