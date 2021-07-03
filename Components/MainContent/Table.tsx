import React, { useState, useEffect } from 'react';
import TableItem, { stateType, folderType } from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import apiData from '../../lib/surveys.json';
import alzaLogo from '../../assets/u.png';
import Image from 'next/image';

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

   useEffect(() => {
      handleClickSort('answered');
   }, []);

   const handleThreeDots = (id: number) => {
      if (expanded === -1) setExpanded(id);
      else if (expanded === id) setExpanded(-1);
      else setExpanded(id);
   };

   const handleClickSort = (fieldToSort: FieldSortType) => {
      switch (fieldToSort) {
         case 'title':
            if (headerWhiteColor === 'title') setHeaderWhiteColor('descTitle');
            else setHeaderWhiteColor('title');
            if (sortTitle) {
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return ('' + b.title).localeCompare(a.title);
                  })
               );
            } else {
               allSortedAsc();
               sortTitle = true;
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return ('' + a.title).localeCompare(b.title);
                  })
               );
            }
            break;

         case 'state':
            if (headerWhiteColor === 'state') setHeaderWhiteColor('descState');
            else setHeaderWhiteColor('state');
            if (sortState) {
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return ('' + b.state).localeCompare(a.state);
                  })
               );
            } else {
               allSortedAsc();
               sortState = true;
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return ('' + a.state).localeCompare(b.state);
                  })
               );
            }
            break;

         case 'viewed':
            if (headerWhiteColor === 'viewed')
               setHeaderWhiteColor('descViewed');
            else setHeaderWhiteColor('viewed');
            if (sortViewed) {
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return b.viewed - a.viewed;
                  })
               );
            } else {
               allSortedAsc();
               sortViewed = true;
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return a.viewed - b.viewed;
                  })
               );
            }
            break;

         case 'answered':
            if (headerWhiteColor === 'answered')
               setHeaderWhiteColor('descAnswered');
            else setHeaderWhiteColor('answered');
            if (sortAnswered) {
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return b.answered - a.answered;
                  })
               );
            } else {
               allSortedAsc();
               sortAnswered = true;
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return a.answered - b.answered;
                  })
               );
            }
            break;

         case 'folder':
            if (headerWhiteColor === 'folder')
               setHeaderWhiteColor('descFolder');
            else setHeaderWhiteColor('folder');
            if (sortFolder) {
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return ('' + b.folder).localeCompare(a.folder);
                  })
               );
            } else {
               allSortedAsc();
               sortFolder = true;
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return ('' + a.folder).localeCompare(b.folder);
                  })
               );
            }
            break;

         case 'created':
            if (headerWhiteColor === 'created')
               setHeaderWhiteColor('descCreated');
            else setHeaderWhiteColor('created');
            if (sortCreated) {
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return b.created - a.created;
                  })
               );
            } else {
               allSortedAsc();
               sortCreated = true;
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return a.created - b.created;
                  })
               );
            }
            break;

         case 'validUntil':
            if (headerWhiteColor === 'validUntil')
               setHeaderWhiteColor('descValidUntil');
            else setHeaderWhiteColor('validUntil');
            if (sortValidUntil) {
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return b.validUntil - a.validUntil;
                  })
               );
            } else {
               allSortedAsc();
               sortValidUntil = true;
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return a.validUntil - b.validUntil;
                  })
               );
            }
         default:
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
            <Titel>Surveys</Titel> <StyledButton>New Survey</StyledButton>
         </Header>
         <TableHeader
            sortOnClick={handleClickSort}
            beingSorted={headerWhiteColor}
            allCheckboxes={allCheckboxes}
            handleClickAllCheckboxes={handleClickAllCheckboxes}
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
   justify-content: space-between;
   margin: 0 0 20px;
   padding: 10px 0 30px 10px;
   border-bottom: 1px solid #3e2b4c;
   width: 1030px;
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
