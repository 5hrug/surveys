import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
   text: string;
   icon?: any;
   selected?: string;
   onClick?: (name: string) => void;
}
function Item({ text, icon, selected, onClick }: Props) {
   return (
      <Container onClick={() => onClick && onClick(text)}>
         {selected === text ? <Selected /> : null}
            <Title>{text}</Title>
      </Container>
   );
}

const Selected = styled('div')`
   width: 3px;
   position: absolute;
   height: 100%;
   min-height: 100%;
   max-height: 100%;
   /* height: 50px; */
   background: linear-gradient(#e66465, #9198e5);
`;
const Container = styled.div`
   position: relative;

   color: #727278;
   display: flex;
   align-items: center;
   margin: 25px 0;
`;
const Title = styled.a`
   font-size: 14px;
   margin-left: 10px;
   text-decoration: none;
`;
export default Item;
