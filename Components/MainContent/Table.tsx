import React from 'react';
import TableItem from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader'

interface Props {
   title: string;
   state: 'Odesíla se' | 'Zpracovaná';
   viewed: number;
   answered: number;
   folder: 'Unikátní' | 'Providelne';
   created: Date;
   validUntil: Date;
   styledImage: any;
}
// created={date} validUntil={date}
function Table() {
   const date = new Date();
   console.log(date);
   return (
      <Container>
         <Header>
            <Titel>Surveys</Titel> <StyledButton>New Survey</StyledButton>
       </Header>
       <TableHeader/>
         <TableItem
            title='nazov'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
         />
         <TableItem
            title='nazov'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
         />
         <TableItem
            title='nazov'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
         />
         <TableItem
            title='nazov'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
         />
         <TableItem
            title='nazov'
            state='Odesíla se'
            viewed={230}
            answered={154}
            folder='Pravidelne'
            created={date}
            validUntil={date}
         />

      </Container>
   );
}
//#222533

const Container = styled.div`
   background-color: #222533;
   margin: 0;
   width: 100%;
   height: 100%;
`;

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 15px 30px 20px;
   border-bottom: 1px solid #3e2b4c;
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
