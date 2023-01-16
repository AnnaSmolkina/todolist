import styled from "styled-components";
import {theme} from "../../../styles/theme";

export type AccordionPropsType = {
    isActive: boolean
}
export const AccordionWrapperStyled = styled.div``;
export const AccordionTitleWithInputStyled = styled.div<AccordionPropsType>`
  display: ${props => props.isActive ? 'flex' : 'none'};
  align-items: center;
  ${theme.mainFont};
  ${theme.fontSize.standardFontSize};
  ${theme.fontWeight.boldFontWeight};
`;

export const AccordionBlockNameStyled = styled.div<AccordionPropsType>`
  display: ${props => props.isActive ? 'none' : 'flex'};
  align-items: center;
  padding-left: 15px;
`;
export const AccordionBlockStyled = styled.div<AccordionPropsType>`
  height: ${props => props.isActive ? 'auto' : '79px'};
  background: ${theme.colors.backgroundContentColor};
  box-shadow: 16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.isActive ? '40px' : '25px'};
  margin-bottom: 32px;
  
`;

export const AccordionButtonStyled = styled.button`
  background: ${theme.colors.backgroundContentColor};
  border: 0;
  margin-right: 0;
`;

export const AccordionTitleStyled = styled.div`
  width: 250px;
  ${theme.mainFont};
  ${theme.fontSize.standardFontSize};
  ${theme.fontWeight.boldFontWeight};
`;