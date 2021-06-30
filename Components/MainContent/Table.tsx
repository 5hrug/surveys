import React, { useState, useEffect, useRef } from 'react';
import TableItem, { stateType, folderType } from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import apiData from '../../lib/surveys.json';

type FieldSortType = string | number;

const allSortedAsc = () => {
   (sortTitle = false),
      (sortState = false),
      (sortViewed = false),
      (sortAnswered = false),
      (sortFolder = false),
      (sortCreated = false),
      (sortValidUntil = false);
};
let sortTitle = false,
   sortState = false,
   sortViewed = false,
   sortAnswered = false,
   sortFolder = false,
   sortCreated = false,
   sortValidUntil = false;

function Table() {
   const [expanded, setExpanded] = useState<number>(-1);
   const surveysData = apiData.data;
   const [sortedSurveys, setSortedSurveys] = useState<any>();
   const [headerWhiteColor, setHeaderWhiteColor] = useState('');

   useEffect(() => {
      handleClickSort('answered');
   }, []);

   const handleThreeDots = (id: number) => {
      if (expanded === -1) setExpanded(id);
      else if (expanded === id) setExpanded(-1);
      else setExpanded(id);
   };

   const handleClickSort = ( fieldToSort: FieldSortType) => {
      switch (fieldToSort) {

         case 'title':
            setHeaderWhiteColor('title');
            if (sortTitle) {
               console.log('if');
               allSortedAsc();
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return ('' + b.title).localeCompare(a.title);
                  })
               );
            } else {
               console.log('elseif');
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
            setHeaderWhiteColor('state');
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
            setHeaderWhiteColor('viewed');
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
            setHeaderWhiteColor('answered');
            console.log('answered');
            if (sortAnswered) {
               allSortedAsc();
               console.log('if answered');
               const newSurveys = surveysData.slice();
               setSortedSurveys(
                  newSurveys.sort((a, b) => {
                     return b.answered - a.answered;
                  })
               );
            } else {
               allSortedAsc();
               console.log('else answered');
               console.log('surveysData.slice() answered', surveysData.slice());
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
            setHeaderWhiteColor('folder');
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
            setHeaderWhiteColor('created');
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
            setHeaderWhiteColor('validUntil');
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
            console.log('default');
      }
   };
   return (
      <Container>
         <Header>
            <Titel>Surveys</Titel> <StyledButton>New Survey</StyledButton>
         </Header>
         <TableHeader sortOnClick={handleClickSort} whiteColor={headerWhiteColor}  />
         {sortedSurveys &&
            sortedSurveys.map((objInArray: any) => {
               return (
                  <TableItem
                     key={objInArray.id}
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
                  />
               );
            })}
         
         {/* <TableItem
            title='nazov'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
            onClickDots={() => {
               handleThreeDots('nazov');
            }}
            expanded={expanded}
         />
         <TableItem
            title='nazov2'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
            onClickDots={() => {
               handleThreeDots('nazov2');
            }}
            expanded={expanded}
         />
         <TableItem
            title='nazov3'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
            onClickDots={() => {
               handleThreeDots('nazov3');
            }}
            expanded={expanded}
         />
         <TableItem
            title='nazov4'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
            onClickDots={() => {
               handleThreeDots('nazov4');
            }}
            expanded={expanded}
         />
         <TableItem
            title='nazov5'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
            onClickDots={() => {
               handleThreeDots('nazov5');
            }}
            expanded={expanded}
         /> */}
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
