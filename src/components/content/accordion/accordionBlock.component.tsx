import {useState} from "react";
import {BottomAccordionIcon, TopAccordionIcon} from "../../icons/accordeonIcons";
import {
    AccordionBlockStyled,
    AccordionButtonStyled, AccordionTitleStyled, AccordionBlockNameStyled,
} from "./accordion.styled";
import {TasksBlockPropsType} from "../tasks/tasksBlock.type";
import { TasksBlockComponent } from "../tasks/tasksBlock.component";
import {SpanLineComponent} from "../../common/spanLine/spanLine.component";
import {CheckBoxComponent} from "./checkBox.component";

export const AccordionBlockComponent = ({block}: TasksBlockPropsType) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <>
        <CheckBoxComponent isActive={isActive} setIsActive={setIsActive} block={block}  />
        <AccordionBlockStyled isActive={isActive}>
            <AccordionBlockNameStyled isActive={isActive}>
            <SpanLineComponent isActive={isActive}/>
            <AccordionTitleStyled>{block.title}</AccordionTitleStyled>
            <AccordionButtonStyled onClick={() => setIsActive(!isActive)}>
                {isActive ? <BottomAccordionIcon/> : <TopAccordionIcon/>}
            </AccordionButtonStyled>
            </AccordionBlockNameStyled>
            {isActive && (
                    block.tasksList.map((task: any) => (
                        <TasksBlockComponent key={task.taskName} task={task} isActive={isActive}/>
                    ))
            )}
        </AccordionBlockStyled>
        </>

    )
}