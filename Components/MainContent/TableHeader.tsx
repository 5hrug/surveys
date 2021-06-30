import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
   sortOnClick: (name: string) => void;
   whiteColor: string;
}
function TableHeader({ sortOnClick, whiteColor }: Props) {
   return (
      <Wrapper>
         <StyledCheckbox onClick={() => {}}></StyledCheckbox>

         <Container>
            <Item
               onClick={() => {
                  sortOnClick('title');
               }}
               color={whiteColor == 'title' ? whiteColor : ''}>
               Title
               {whiteColor == 'title' && <Icon icon={faAngleDown} />}
            </Item>
            <Item
               onClick={() => {
                  sortOnClick('state');
               }}
               color={whiteColor == 'state' ? whiteColor : ''}>
               State
               {whiteColor == 'state' && <Icon icon={faAngleDown} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('viewed');
               }}
               color={whiteColor == 'viewed' ? whiteColor : ''}>
               Viewed
               {whiteColor == 'viewed' && <Icon icon={faAngleDown} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('answered');
               }}
               color={whiteColor == 'answered' ? whiteColor : ''}>
               Answered
               {whiteColor == 'answered' && <Icon icon={faAngleDown} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('folder');
               }}
               color={whiteColor == 'folder' ? whiteColor : ''}>
               Folder
               {whiteColor == 'folder' && <Icon icon={faAngleDown} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('created');
               }}
               color={whiteColor == 'created' ? whiteColor : ''}>
               Created
               {whiteColor == 'created' && <Icon icon={faAngleDown} />}

            </Item>
            <Item
               onClick={() => {
                  sortOnClick('validUntil');
               }}
               color={whiteColor == 'validUntil' ? whiteColor : ''}>
               Valid until
               {whiteColor == 'validUntil' && <Icon icon={faAngleDown} />}

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
