import {Dispatch, ReactElement, SetStateAction} from "react";

export interface ControlWithButtonsInterface{
    controlState: string;
    setControlStates: Dispatch<SetStateAction<string>>;
    children: ReactElement | ReactElement[];
}