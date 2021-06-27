import React from 'react'
import styled from 'styled-components'

interface Props{
  text: string;
  icon?: any;
}
function Item({text,icon}:Props) {
  return (
    <Container>

      <Title>{text}</Title>
    </Container>
  )
}
// #434348
const Container = styled.div`
color: #727278;
display: flex;
align-items: center;
margin: 25px 0;
`;
const Title = styled.div`
font-size: 14px;
margin-left:10px;
`;
export default Item
