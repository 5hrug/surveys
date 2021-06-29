import React, {useState} from 'react';
import TableItem from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader';

function Table() {
   const [expanded, setExpanded] = useState<string>('');
   const date = new Date();
   const handleThreeDots = (title: string) => {
      if (expanded === '') setExpanded(title);
      else if (expanded === title) setExpanded('');
      else setExpanded(title);
   }

   return (
      <Container>
         <Header>
            <Titel>Surveys</Titel> <StyledButton>New Survey</StyledButton>
         </Header>
         <TableHeader />
         <TableItem
            title='nazov'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
            onClickDots={() => { handleThreeDots('nazov') }}
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
            onClickDots={()=>{handleThreeDots('nazov2')}}
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
            onClickDots={()=>{handleThreeDots('nazov3')}}
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
            onClickDots={()=>{handleThreeDots('nazov4')}}
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
            onClickDots={()=>{handleThreeDots('nazov5')}}
            expanded={expanded}

         />
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
