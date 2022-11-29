import {DetailedHTMLProps, HtmlHTMLAttributes} from "react";

export interface ButtonControlInterface extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    onClick: () => void;
    text: string;
}