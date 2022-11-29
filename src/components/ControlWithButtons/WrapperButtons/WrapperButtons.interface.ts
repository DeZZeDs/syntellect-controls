import {ReactNode} from "react";

export interface WrapperButtonsInterface {
    children: ReactNode;
    tag: "left" | "right";
}