import React from "react"
import styled from "styled-components"

const H1Title = styled.h1`
  font-size: 80px;
  color: rgb(0, 175, 175);
  text-align: center;
  margin: 50px 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin: 30px 0;
  }
`

const Header = () => {
  return (
    <>
      <H1Title>To Do List</H1Title>
    </>
  )
}

export default Header
