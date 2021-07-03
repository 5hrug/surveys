import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';
interface Props {
   sortOnClick: (name: string) => void;
   beingSorted: string;
   allCheckboxes?: boolean;
   handleClickAllCheckboxes?: () => void;
}
function TableHeader({
   sortOnClick,
   beingSorted,
   allCheckboxes,
   handleClickAllCheckboxes,
}: Props) {
   return (
      <Wrapper>
         <StyledCheckbox onClick={handleClickAllCheckboxes}>
            {allCheckboxes && <CheckIcon icon={faCheck} />}
         </StyledCheckbox>
         <Container>
            <Item
               onClick={() => {
                  sortOnClick('title');
               }}
               color={(beingSorted === 'title' ||  beingSorted === 'descTitle') ? beingSorted : ''}>
               Title
               {beingSorted === 'title' && <Icon icon={faAngleDown} />}
               {beingSorted === 'descTitle' && <Icon icon={faAngleUp} />}
            </Item>
            <Item
               onClick={() => {
                  sortOnClick('state');
               }}
               color={beingSorted === 'state' || beingSorted === 'descState' ? beingSorted : ''}>
               State
               {beingSorted ==='state' && <Icon icon={faAngleDown} />}
               {beingSorted === 'descState' && <Icon icon={faAngleUp} />}
            </Item>
            <Item
               onClick={() => {
                  sortOnClick('viewed');
               }}
               color={beingSorted === 'viewed' || beingSorted === 'descViewed' ? beingSorted : ''}>
               Viewed
               {beingSorted === 'viewed' && <Icon icon={faAngleDown} />}
               {beingSorted === 'descViewed' && <Icon icon={faAngleUp} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('answered');
               }}
               color={beingSorted === 'answered' || beingSorted === 'descAnswered' ? beingSorted : ''}>
               Answered
               {beingSorted === 'answered' && <Icon icon={faAngleDown} />}
               {beingSorted === 'descAnswered' && <Icon icon={faAngleUp} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('folder');
               }}
               color={beingSorted === 'folder' || beingSorted === 'descFolder' ? beingSorted : ''}>
               Folder
               {beingSorted === 'folder' && <Icon icon={faAngleDown} />}
               {beingSorted === 'descFolder' && <Icon icon={faAngleUp} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('created');
               }}
               color={beingSorted === 'created' || beingSorted === 'descCreated'  ? beingSorted : ''}>
               Created
               {beingSorted === 'created' && <Icon icon={faAngleDown} />}
               {beingSorted === 'descCreated' && <Icon icon={faAngleUp} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('validUntil');
               }}
               color={beingSorted === 'validUntil' || beingSorted === 'descValidUntil'  ? beingSorted : ''}>
               Valid until
               {beingSorted === 'validUntil' && <Icon icon={faAngleDown} />}
               {beingSorted === 'descValidUntil' && <Icon icon={faAngleUp} />}

            </Item>
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
   justify-content: space-evenly;
   width: 1000px;
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
   color: ${({ color }) => (color ? '#cfcfcf' : '#5f5f64')};
   font-size: 13px;
   cursor: pointer;
`;

export default TableHeader;
