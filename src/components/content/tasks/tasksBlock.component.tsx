import {BlockWrapperStyled, TaskDescriptionStyled, TaskNameStyled, TaskStyled} from "./tasksBlock.styled";
import {TaskType} from "./tasksBlock.type";
import {SpanLineComponent} from "../../common/spanLine/spanLine.component";
import React, {useEffect, useState} from "react";
import {SwitchComponent} from "../switch/switch.component";

type PropsType = {
     task: TaskType,
     isActive: boolean
}
export const TasksBlockComponent = ({task, isActive}: PropsType) => {
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if (checked) {
            setIsFinished(true)
        }
        if (!checked) {
            setIsFinished(false)
        }
    }, [checked] )


     return (
         <BlockWrapperStyled isActive={isActive}>
             <SpanLineComponent isActive={isActive}/>
             <TaskStyled>
                 <TaskNameStyled isFinished={isFinished}>{task.taskName}</TaskNameStyled>
                 <TaskDescriptionStyled>{task.description}</TaskDescriptionStyled>
             </TaskStyled>
             <SwitchComponent checked={checked} setChecked={setChecked} />
         </BlockWrapperStyled>
     )
}