import {HeaderSettingsStyled, HeaderStyled, HeaderTitleStyled} from "./header.styled"
import {useContext} from "react";
import {AppContext} from "../../context/contextProvider";
import {SettingsIcon} from "../icons/settingsIcon";

type HeaderPropsType = {
    setIsPlayed: (isPlayed: boolean) => void
}
export const Header = ({setIsPlayed}: HeaderPropsType) => {
    const context = useContext(AppContext);
    return (
        <HeaderStyled>
            <HeaderTitleStyled>{context.headerTitle}</HeaderTitleStyled>
            <HeaderSettingsStyled onClick={() => setIsPlayed(false) }>
                <SettingsIcon/>
            </HeaderSettingsStyled>
        </HeaderStyled>

    )
}