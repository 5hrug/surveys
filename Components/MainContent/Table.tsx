import React, { useState, useEffect, useMemo } from 'react';
import TableItem, { stateType, folderType } from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import apiData from '../../lib/surveys.json';

type FieldSortType = string | number;

let sortTitle = false,
   sortState = false,
   sortViewed = false,
   sortAnswered = false,
   sortFolder = false,
   sortCreated = false,
   sortValidUntil = false;

const allSortedAsc = () => {
   (sortTitle = false),
      (sortState = false),
      (sortViewed = false),
      (sortAnswered = false),
      (sortFolder = false),
      (sortCreated = false),
      (sortValidUntil = false);
};

function Table() {
   const [expanded, setExpanded] = useState<number>(-1);
   const surveysData = apiData.data;
   const [sortedSurveys, setSortedSurveys] = useState<any>();
   const [headerWhiteColor, setHeaderWhiteColor] = useState('');
   const [allCheckboxes, setAllCheckboxes] = useState(false);
   const [isCheck, setIsCheck] = useState<number[]>([]);

   const [last, setLast] = useState<string>();
   useEffect(() => {
      // handleClickSort('answered');
      handleClickSort('answered');
   }, []);

   const handleThreeDots = (id: number) => {
      if (expanded === -1) setExpanded(id);
      else if (expanded === id) setExpanded(-1);
      else setExpanded(id);
   };

   const handleClickSort = (fieldToSort: string) => {
      const newSurveys = surveysData.slice();
      if (headerWhiteColor === fieldToSort)
         setHeaderWhiteColor('desc' + fieldToSort);
      else setHeaderWhiteColor(fieldToSort);
      if (last != fieldToSort) {
         setSortedSurveys(
            newSurveys.sort((a, b) =>
               a[fieldToSort as keyof typeof a] >
               b[fieldToSort as keyof typeof b]
                  ? 1
                  : -1
            )
         );
         setLast(fieldToSort);
         console.log('first', last);
      } else {
         setSortedSurveys(
            newSurveys.sort((a, b) =>
               a[fieldToSort as keyof typeof a] <
               b[fieldToSort as keyof typeof b]
                  ? 1
                  : -1
            )
         );
         setLast('');
         console.log('secont', last);
      }
   };

   const handleClickCheckbox = (checked: boolean, id: number) => {
      if (!checked) {
         setIsCheck(isCheck.filter((item) => item !== id));
      } else setIsCheck([...isCheck, id]);
   };

   const handleClickAllCheckboxes = () => {
      if (allCheckboxes) {
         setIsCheck([]);
      } else {
         const newData = surveysData.slice();
         setIsCheck(newData.map((item) => item.id));
      }
      setAllCheckboxes(!allCheckboxes);
   };
   return (
      <Container>
         <Header>
            <Titel>Surveys</Titel>
            <StyledButton>New Survey</StyledButton>
         </Header>
         <TableHeader
            sortOnClick={handleClickSort}
            beingSorted={headerWhiteColor}
            allCheckboxes={allCheckboxes}
            handleClickAllCheckboxes={handleClickAllCheckboxes}
            headerItems={[
               'title',
               'state',
               'viewed',
               'answered',
               'folder',
               'created',
               'validUntil',
            ]}
         />

         {sortedSurveys &&
            sortedSurveys.map((objInArray: any) => {
               return (
                  <TableItem
                     key={objInArray.id}
                     handleClickCheckbox={handleClickCheckbox}
                     isChecked={isCheck.includes(objInArray.id)}
                     id={objInArray.id}
                     title={objInArray.title}
                     state={objInArray.state as stateType}
                     viewed={objInArray.viewed}
                     answered={objInArray.answered}
                     folder={objInArray.folder as folderType}
                     created={objInArray.created}
                     validUntil={objInArray.validUntil}
                     onClickDots={() => {
                        handleThreeDots(objInArray.id);
                     }}
                     expanded={expanded}
                     image={objInArray.image}
                  />
               );
            })}
      </Container>
   );
}
const Container = styled.div`
   background-color: #222533;
   padding: 20px 40px;
   width: 100%;
   height: 100%;
`;
const Header = styled.div`
   display: flex;
   margin: 0 0 20px;
   padding: 10px 0 30px 10px;
   border-bottom: 1px solid #3e2b4c;
   width: 1030px;
   justify-content: space-between;
`;
const Titel = styled.div`
   font-size: large;
   color: #fff;
`;
const StyledButton = styled.a`
   font-size: medium;
   color: #fff;
   background: linear-gradient(#e264fb, #8952e9);
   padding: 5px 30px;
   border-radius: 5px;
   cursor: pointer;
`;

export default Table;
