import {useContext} from "react";
import {AppContext} from "../../../context/contextProvider";
import {
    AccordionWrapperStyled,
} from "./accordion.styled";
import {AccordionBlockComponent} from "./accordionBlock.component";

export const AccordionComponent = () => {
    const context = useContext(AppContext);
    return (
        <AccordionWrapperStyled>
            {context.accordion.map((block) => (
                <AccordionBlockComponent key={block.title} block={block}/>
            ))}
        </AccordionWrapperStyled>

    )
}