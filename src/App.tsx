import React, {useState} from 'react';
import {AppWrapperStyled, ContainerStyled} from "./styles/AppWrapperStyled";
import {Header} from "./components/header/header.component";
import {ContentContainer} from "./components/content/content.container";
import Marquee from "react-fast-marquee";


function App() {
    const [isPlayed, setIsPlayed] = useState<boolean>(true);
  return (
    <AppWrapperStyled>
        <ContainerStyled>
            <Header setIsPlayed={setIsPlayed} />
            <ContentContainer />
            <div style={{display: isPlayed ? 'block' : 'none'}} >
            <Marquee>
                Новостная строка
            </Marquee>
            </div>
        </ContainerStyled>

    </AppWrapperStyled>
  );
}

export default App;
