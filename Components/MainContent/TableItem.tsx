import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThreeDots from './ThreeDots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Image from 'next/image';
import {
   faTrashAlt,
   faEye,
   faPlay,
   faEdit,
   faSignal,
   faCheck,
} from '@fortawesome/free-solid-svg-icons';

export type stateType = 'Odesíla se' | 'Zpracovaná';
export type folderType = 'Unikátní' | 'Pravidelne';

interface Props {
   id: number;
   title: string;
   state: stateType;
   viewed: number;
   answered: number;
   folder: folderType;
   created: number;
   validUntil: number;
   expanded: number;
   isChecked: boolean;
   image: string;
   onClickDots: () => void;
   handleClickCheckbox: (checked: boolean, id: number) => void;
}
export function TableItem(props: Props) {
   const [checked, setChecked] = useState(false);

   const handleUnix = (unixTimestamp: number) => {
      return moment.unix(unixTimestamp).format('DD. MMM YYYY');
   };

   const ex = String(props.expanded);
   const colorId = String(props.id);

   useEffect(() => {
      props.handleClickCheckbox(checked, props.id);
   }, [checked]);

   return (
      <Wrapper>
         <Row>
            <StyledCheckbox
               onClick={() => {
                  setChecked((prev) => !prev);
               }}>
               {props.isChecked && <CheckIcon icon={faCheck} />}
            </StyledCheckbox>
            <Container id={ex} color={colorId}>
               <Title>{props.title}</Title>
               <Item>{props.state}</Item>
               <ItemBold>{props.viewed}</ItemBold>
               <ItemBold>{props.answered}</ItemBold>
               <Item>{props.folder}</Item>
               <Item>{handleUnix(props.created)}</Item>
               <Item>{handleUnix(props.validUntil)}</Item>
               <ImgWrapper>
                  <ImageRingTeal>
                     <ImageRingBlack>
                        <CreatedByImage
                           src={require('../../assets/' + props.image)}
                           height={50}
                           width={50}
                           alt='Logo'
                        />
                     </ImageRingBlack>
                  </ImageRingTeal>
               </ImgWrapper>
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
const ImageRingBlack = styled('div')`
   height: 55px;
   width: 55px;
   background-color: black;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
`;

const ImageRingTeal = styled(ImageRingBlack)`
   height: 60px;
   width: 60px;
   background: linear-gradient(#0b8fcc, #0bcbe4); ;
`;

const CreatedByImage = styled(Image)`
   border-radius: 50%;
   object-fit: cover;
`;
const Icon = styled(FontAwesomeIcon)`
   font-weight: lighter;
   height: 12px;
   margin-right: 5px;
`;
const CheckIcon = styled(FontAwesomeIcon)`
   color: white;
   height: 12px;
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
   width: 900px;
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
   background-color: ${(props) =>
      props.color == props.id ? '#282b3b' : '#222533'};
   height: 3em;
   align-items: center;
   /* justify-content: space-evenly; */
   /* width: 1000px; */
   ${(props) => (props.color == props.id ? '' : 'border: 1px dashed #3e2b4c;')}
   height: 70px;
   border-radius: 5px;
   box-shadow: ${(props) =>
      props.color == props.id ? '0 0 5px 5px rgb(32,32,50,1)' : ''};
   padding-left: 20px;
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
const ItemBold = styled.div`
   color: #66676c;
   font-weight: bold;
   font-size: 13px;
   width: 110px;
`;
const Item = styled.div`
   color: #c2c2c2;
   font-size: 13px;
   width: 110px;
`;

export const Title = styled(Item)`
   width: 200px;
`;
export const ImgWrapper = styled(Item)`
   width: 80px;
`;
const StyledImage = styled.div``;

export default TableItem;
