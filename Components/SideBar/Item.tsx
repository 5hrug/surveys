import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
   text: string;
   icon?: any;
   selected?: string;
   onClick?: (name: string) => void;
}
function Item({ text, icon, selected, onClick }: Props) {
   return (
      <Container onClick={() => onClick && onClick(text)}>
         <IconWrapper>
            {selected === text ? <Selected /> : null}
            <Icon icon={icon} />
         </IconWrapper>
         <td>
            <Title>{text}</Title>
         </td>
      </Container>
   );
}

const IconWrapper = styled('td')`
   position: relative;
`;
const Icon = styled(FontAwesomeIcon)`
   height: 12px;
   margin-left: 40px;
   margin-right: -20px;
`;
const Selected = styled('div')`
   width: 3px;
   position: absolute;
   height: 100%;
   top: 0;
   background: linear-gradient(#e66465, #9198e5);
`;
const Container = styled.tr`
   position: relative;
   color: #727278;
   padding: 12px 0;
   height: 50px;
   cursor: pointer;
`;
const Title = styled.a`
   font-size: 14px;
   text-decoration: none;
`;
export default Item;
