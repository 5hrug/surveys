import React, { useState } from 'react';
import styled from 'styled-components';
import Item from './Item';
import {
   faTrashAlt,
   faEye,
   faPlay,
   faEdit,
   faSignal,
   faCheck,
} from '@fortawesome/free-solid-svg-icons';

function SideBar() {
   const [selected, setSelected] = useState('Surveys');
   const handleClickSelected = (name: string) => {
      setSelected(name);
   };
   return (
      <Container>
         <Table_>
            <tbody>
               <Item
                  text='Dashboard'
                  icon={faTrashAlt}
                  selected={selected}
                  onClick={handleClickSelected}
               />
               <Item
                  text='Campains'
                  icon={faEye}
                  selected={selected}
                  onClick={handleClickSelected}
               />
               <Item
                  text='Workflows'
                  icon={faPlay}
                  selected={selected}
                  onClick={handleClickSelected}
               />
               <Item
                  text='Templates'
                  icon={faEdit}
                  selected={selected}
                  onClick={handleClickSelected}
               />
               <Item
                  text='Stats'
                  icon={faTrashAlt}
                  selected={selected}
                  onClick={handleClickSelected}
               />
               <Item
                  text='Contacts'
                  icon={faSignal}
                  selected={selected}
                  onClick={handleClickSelected}
               />
               <Item
                  text='Surveys'
                  icon={faCheck}
                  selected={selected}
                  onClick={handleClickSelected}
               />
            </tbody>
         </Table_>
      </Container>
   );
}
const Container = styled.div`
   /* width: 13%; */
   /* width: 100%; */
   width: 200px;
   background-color: #1a1b25;
   height: 100%;
`;
const Table_ = styled.table`
  /* table-layout: fixed; */

   /* width: 13%; */
   /* width: 100%; */
   width: 200px;
   background-color: #1a1b25;
   /* height: 100%; */
   /* height: 300px; */
`;
export default SideBar;
