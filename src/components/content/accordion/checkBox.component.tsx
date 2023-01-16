import {Checkbox} from "@mui/material";
import {AccordionTitleWithInputStyled} from "./accordion.styled";
import {TaskListType} from "../tasks/tasksBlock.type";

type CheckBoxPropsType = {
    isActive: boolean,
    setIsActive: (isActive: boolean) => void,
    block: TaskListType
}
export const CheckBoxComponent = ({isActive, setIsActive, block}: CheckBoxPropsType) => {
    return (
        <AccordionTitleWithInputStyled isActive={isActive}>
            <Checkbox defaultChecked
                      onClick={() => setIsActive(false)}
                      sx={{
                          color: 'white',
                          '&.Mui-checked': {
                              color: 'white',
                          },
                      }} />
            {block.title}
        </AccordionTitleWithInputStyled>
    )
}