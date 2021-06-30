import React, { useState } from 'react';
import styled from 'styled-components';
import ThreeDots from './ThreeDots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faTrashAlt,
   faEye,
   faPlay,
   faEdit,
   faSignal,
} from '@fortawesome/free-solid-svg-icons';

export type stateType = 'Odesíla se' | 'Zpracovaná';
export type folderType = 'Unikátní' | 'Pravidelne';

interface Props {
   id: number;
   title: string;
   state: stateType;
   viewed?: number;
   answered?: number;
   folder?: folderType;
   created?: string;
   validUntil?: string;
   styledImage?: any;
   onClickDots?: () => void;
   expanded?: number;
}
export function TableItem(props: Props) {
   return (
      <Wrapper>
         <Row>
            <StyledCheckbox onClick={() => {}}></StyledCheckbox>
            <Container>
               <Item>{props.title}</Item>
               <Item>{props.state}</Item>
               <ItemBold>{props.viewed}</ItemBold>
               <ItemBold>{props.answered}</ItemBold>
               <Item>{props.folder}</Item>
               <Item>{props.created}</Item>
               <Item>{props.validUntil}</Item>
               <StyledImage>{props.styledImage}</StyledImage>
            </Container>
            <ThreeDots onClick={props.onClickDots} />
         </Row>
         {props.expanded === props.id && (
            <Row>
               <ExpandedContainer>
                  <ExpandedItem>
                     <Icon icon={faPlay} />
                     Activate
                  </ExpandedItem>
                  <ExpandedItem>
                     <Icon icon={faEye} />
                     Preview
                  </ExpandedItem>
                  <ExpandedItem>
                     <Icon icon={faEdit} />
                     Edit
                  </ExpandedItem>
                  <ExpandedItem>
                     <Icon icon={faSignal} />
                     Stats
                  </ExpandedItem>
                  <ExpandedItem>
                     <Icon icon={faTrashAlt} />
                     Delete
                  </ExpandedItem>
               </ExpandedContainer>
            </Row>
         )}
      </Wrapper>
   );
}
const Icon = styled(FontAwesomeIcon)`
   font-weight: lighter;
   height: 12px;
   margin-right: 5px;
`;
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: max-content;
   align-items: center;
   margin: 10px 0;
`;

const ExpandedContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   background-color: #171820;
   height: 50px;
   align-items: center;
   width: 950px;
   border-radius: 5px;
`;

const ExpandedItem = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   color: #abadb0;
   font-size: 12px;
   margin: 0 10px;
`;
const Row = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;
const Container = styled.div`
   display: flex;
   flex-direction: row;
   background-color: #222533;
   height: 3em;
   align-items: center;
   justify-content: space-evenly;
   width: 1000px;
   border: 1px dashed #3e2b4c;
   height: 70px;
   border-radius: 5px;
`;
const StyledCheckbox = styled.div`
   width: 20px;
   height: 20px;
   border: 1px dashed #3e2b4c;
   border-radius: 3px;
   margin: 0 10px 0 0;
`;
const ItemBold = styled.div`
   color: #66676c;
   font-weight: bold;
   font-size: 13px;
`;
const Item = styled.div`
   color: #c2c2c2;
   font-size: 13px;
`;
const StyledImage = styled.div``;

export default TableItem;
