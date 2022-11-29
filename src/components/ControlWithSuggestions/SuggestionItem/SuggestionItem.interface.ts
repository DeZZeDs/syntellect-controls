import {Dispatch, SetStateAction} from "react";

export interface SuggestionItemInterface{
    country?: string;
    fullName?: string;
    image?: string;
    textEmpty?: string;
    onClick?: Dispatch<SetStateAction<string>>;
}