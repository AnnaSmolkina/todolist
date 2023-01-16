import {SpanLineStyled} from "./spanLine.styled";
import {AccordionPropsType} from "../../content/accordion/accordion.styled";

export const SpanLineComponent = ({isActive}: AccordionPropsType) => {
    return (
        <SpanLineStyled isActive={isActive}/>
    )
}