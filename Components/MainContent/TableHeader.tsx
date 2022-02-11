import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCheck,
   faAngleDown,
   faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
interface Props {
   sortOnClick: (name: string) => void;
   beingSorted: string;
   allCheckboxes?: boolean;
   handleClickAllCheckboxes?: () => void;
   headerItems: string[];
}
function TableHeader({
   sortOnClick,
   beingSorted,
   allCheckboxes,
   handleClickAllCheckboxes,
   headerItems,
}: Props) {
   return (
      <Wrapper>
         <StyledCheckbox onClick={handleClickAllCheckboxes}>
            {allCheckboxes && <CheckIcon icon={faCheck} />}
         </StyledCheckbox>
         <Container>
            {headerItems.map((item, i) => (
               <Item
                  key={i}
                  onClick={() => {
                     sortOnClick(item);
                  }}
                  style={{
                     width: i === 0 ? '200px' : '110px',
                     color:
                        beingSorted === item || beingSorted === 'desc' + item
                           ? '#cfcfcf'
                           : '#5f5f64',
                  }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {beingSorted === item && <Icon icon={faAngleDown} />}
                  {beingSorted === 'desc' + item && <Icon icon={faAngleUp} />}
               </Item>
            ))}
            <Item onClick={() => {}}>Created by</Item>
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
   padding-left: 20px;
`;
const CheckIcon = styled(FontAwesomeIcon)`
   color: white;
   height: 12px;
`;
const StyledCheckbox = styled.div`
   width: 20px;
   height: 20px;
   border: 1px dashed #3e2b4c;
   border-radius: 3px;
   margin: 0 10px 0 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 30px 0 20px;
`;
const Icon = styled(FontAwesomeIcon)`
   font-weight: lighter;
   height: 12px;
   margin-left: 5px;
   color: #146586;
`;
const Item = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   font-size: 13px;
   cursor: pointer;

   -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
`;
export const Title = styled(Item)`
   width: 200px;
`;

export default TableHeader;
