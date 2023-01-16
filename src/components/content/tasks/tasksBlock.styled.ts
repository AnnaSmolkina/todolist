import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {AccordionPropsType} from "../accordion/accordion.styled";

type TaskNameType = {
    isFinished: boolean
};
export const BlockWrapperStyled = styled.div<AccordionPropsType>`
  display: ${props => props.isActive ? 'flex' : 'none'};
  align-items: center;
  padding: 16px 16px 0;
  
  &:nth-child(3n+3) p{
    background: ${theme.colors.spanColor.second};
  }
  &:nth-child(3n+2) p{
    background: ${theme.colors.spanColor.first};
  }
  &:nth-child(3n+1) p{
    background: ${theme.colors.spanColor.third};
  }
`;

export const TaskStyled = styled.div`
`;
export const TaskNameStyled = styled.div<TaskNameType>`
  width: 200px;
  margin-right: 40px;
  text-decoration: ${props => props.isFinished ? 'line-through' : 'none'};
  ${theme.mainFont};
  ${theme.fontSize.standardFontSize};
  ${theme.fontWeight.boldFontWeight};
`;

export const TaskDescriptionStyled = styled.div`
  color: rgba(255, 255, 255, 0.6);
  ${theme.mainFont};
  ${theme.fontSize.smallFontSize};
  ${theme.fontWeight.boldFontWeight};
`;