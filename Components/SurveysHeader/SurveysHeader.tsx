import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
   return (
      <Container>
         <Item>Help</Item>
         <Item>Clever Store</Item>
         <Item>
            Other
            <Icon icon={faAngleDown} />
         </Item>
      </Container>
   );
}
const Container = styled.div`
   background-color: #2f3243;
   height: 50px;
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
`;
const Icon = styled(FontAwesomeIcon)`
   font-weight: lighter;
   height: 12px;
   margin-left: 5px;
`;
const Item = styled.div`
   color: #9c9da3;
   margin: 0 20px;
`;
export default Header;
