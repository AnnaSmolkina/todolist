
import {theme} from "./theme";
import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 390px;
  width: 100%;
  min-height: 844px;
  margin: auto;
  border-radius: 30px;
  background: ${theme.colors.backgroundAppColor};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  
`;
export const AppWrapperStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.colors.backgroundColor};
  color: ${theme.colors.mainColor};
  overflow: hidden;
`;

