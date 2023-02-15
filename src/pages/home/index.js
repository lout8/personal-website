import React from 'react'
import { Home, HomeContainer, HomeH, HomeP, HomeBtn } from './homeElements'

const HomePage = ({data}) => {
  return (
    <Home>
      {data.home && data.home.map(({id, header, paragraph}) =>{
        return(
          <HomeContainer key={id}>
            <HomeH>{header}</HomeH>
            <HomeP>{paragraph}</HomeP>
            <HomeBtn to="/about">More About Me</HomeBtn>
          </HomeContainer>
        );
      })}
    </Home>
  )
}

export default HomePage