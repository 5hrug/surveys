import React,{useState} from 'react'
import styled from 'styled-components';
import Item from './Item'

function SideBar() {
  const [selected, setSelected] = useState('Surveys');
  const handleClickSelected = (name:string) => {
    setSelected(name);
  }
  return (
    <Container>
      <Item text='Dashboard' selected={selected} onClick={handleClickSelected} />
      <Item text='Campains' selected={selected} onClick={handleClickSelected}/>
      <Item text='Workflows' selected={selected} onClick={handleClickSelected}/>
      <Item text='Templates' selected={selected} onClick={handleClickSelected}/>
      <Item text='Stats' selected={selected} onClick={handleClickSelected}/>
      <Item text='Contacts' selected={selected} onClick={handleClickSelected}/>
      <Item text='Surveys' selected={selected} onClick={handleClickSelected}/>
    </Container>
  )
}

const Container = styled.div`
   width: 13%;
   background-color: #1a1b25;
   height: 100%;
`;
export default SideBar
