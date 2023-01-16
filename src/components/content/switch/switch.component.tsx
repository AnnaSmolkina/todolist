import React from "react";
import {Switch} from "@mui/material";

type SwitchPropsType = {
    checked: boolean,
    setChecked: (checked: boolean) => void
}
export const SwitchComponent = ({checked, setChecked }: SwitchPropsType) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
     };
     return (
         <Switch
             // @ts-ignore
             sx={{
                  '& .MuiSwitch-switchBase': {
                       '&.Mui-checked': {
                            color: 'white',
                            '& + .MuiSwitch-track': {
                                 background: 'green',
                            },
                       },
                       '&.Mui-disabled.MuiSwitch-thumb': {
                            color: 'blue',
                       },
                  },
                  '& .MuiSwitch-thumb': {
                       color: !checked && 'white',
                  },
                  '& .MuiSwitch-track': {
                       backgroundColor: 'blue',
                  },
             }}
             checked={checked}
             onChange={handleChange}
             inputProps={{ 'aria-label': 'controlled' }}
         />
     )
}