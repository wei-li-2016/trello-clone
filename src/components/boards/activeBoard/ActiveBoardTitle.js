import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px 60px;
`

const Title = styled.h1`
  color: white;
  background-color: #9fe7a4;
  text-shadow: 0px 0px 3px #000;
  padding: 10px 60px;
  margin: 0 0 0 50px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const ActiveBoardTitle = ({children}) => (
  <TitleWrapper>
    <Title>
      {children}
    </Title>
  </TitleWrapper>
)

export default ActiveBoardTitle