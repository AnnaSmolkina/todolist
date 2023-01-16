import {theme} from "../../../styles/theme";
import styled from "styled-components";
import {AccordionPropsType} from "../../content/accordion/accordion.styled";

export const SpanLineStyled = styled.p<AccordionPropsType>`
  width: 5px;
  height: 40px;
  background: ${props => props.isActive ?  null : theme.colors.spanColor.default};
  border-radius: 3px;
  margin-right: 13px;
`;
