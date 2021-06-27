import React from 'react'
import styled from 'styled-components';
import Item from './Item'

function SideBar() {
  return (
    <Container>
      <Item text='Dashboard' />
      <Item text='Campains'/>
      <Item text='Workflows'/>
      <Item text='Templates'/>
      <Item text='Stats'/>
      <Item text='Contacts'/>
      <Item text='Surveys'/>
    </Container>
  )
}

const Container = styled.div`
   width: 13%;
   background-color: #1a1b25;
   height: 100%;
`;
export default SideBar
