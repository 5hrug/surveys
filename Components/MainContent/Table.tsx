import React, { useState, useEffect, useRef } from 'react';
import TableItem, { stateType, folderType } from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import apiData from '../../lib/surveys';

type FieldSortType = string | number;

const toggleOtherBooleans = (one: string) => {
   sortTitle = false,
   sortState = false,
   sortViewed = false,
   sortAnswered = false,
   sortFolder = false,
   sortCreated = false,
   sortValidUntil = false
}
const pole = new Array(7).fill(false);
console.log(pole);
let sortTitle = false,
   sortState = false,
   sortViewed = false,
   sortAnswered = false,
   sortFolder = false,
   sortCreated = false,
   sortValidUntil = false;

let premenna = '';
function Table() {
   const [expanded, setExpanded] = useState<number>(-1);
   const date = new Date();
   const surveysData = apiData.data;
   const [sortedSurveys, setSortedSurveys] = useState<any >(
   );


   const handleThreeDots = (id: number) => {
      if (expanded === -1) setExpanded(id);
      else if (expanded === id) setExpanded(-1);
      else setExpanded(id);
   };

   const handleClickSort = (fieldToSort: FieldSortType) => {
      switch (fieldToSort) {
         case 'title':
            
            // if (sortTitle) {
            //    console.log('if')
            //    sortTitle = false;
            //    const newData = surveysData.slice();
            //    setSortedSurveys(
            //       newData.sort((a, b) => {
            //          return ('' + a.title).localeCompare(b.title);
            //       })
            //    );
            // } else {
            //    console.log('elseif')
            //    sortTitle = true;
            //    const newData = surveysData.slice();
            //    setSortedSurveys(
            //       newData.sort((a, b) => {
            //          return ('' + b.title).localeCompare(a.title);
            //       })
            //    );
            // }

            break;
         case 'state':
            if (sortState) {
               sortState = false;
               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return ('' + a.state).localeCompare(b.state);
                  })
               );
            } else {
               sortState = true;
               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return ('' + b.state).localeCompare(a.state);
                  })
               );
            }
            break;
         case 'viewed':
            if (sortViewed) {
               sortViewed = false;

               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return b.viewed - a.viewed;
                  })
               );
            } else {
               sortViewed = true;

               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return a.viewed - b.viewed;
                  })
               );
            }
            break;
         case 'answered':
            console.log('answered');
            if (sortAnswered) {
               console.log('if answered');
               sortAnswered = false;

               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return b.answered - a.answered;
                  })
               );
            } else {
               console.log('else answered');
               console.log('surveysData.slice() answered', surveysData.slice());
               sortAnswered = true;

               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return a.answered - b.answered;
                  })
               );
            }

            break;
         case 'folder':
            if (sortFolder) {
               sortFolder = false;
               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return ('' + a.folder).localeCompare(b.folder);
                  })
               );
            } else {
               sortFolder = true;
               const newData = surveysData.slice();
               setSortedSurveys(
                  newData.sort((a, b) => {
                     return ('' + b.folder).localeCompare(a.folder);
                  })
               );
            }
            break;
         // case 'created':
         //    break;
         // case 'validUntil':
         default:
            console.log('default');
      }
   };
   return (
      <Container>
         <Header>
            <Titel>Surveys</Titel> <StyledButton>New Survey</StyledButton>
         </Header>
         <TableHeader sortOnClick={handleClickSort} />
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
