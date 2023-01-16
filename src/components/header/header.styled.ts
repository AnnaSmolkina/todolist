import styled from "styled-components";
import {theme} from "../../styles/theme";

export const HeaderStyled = styled.header`
  padding: 0 39.5px 0 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitleStyled = styled.h1`
  ${theme.headerTitleFont};
  ${theme.fontSize.largeFontSize};
  ${theme.fontWeight.boldFontWeight};
`;

export const HeaderSettingsStyled = styled.button`
  background: ${theme.colors.backgroundAppColor};
  border-width: 0;
  cursor: pointer; 
`;