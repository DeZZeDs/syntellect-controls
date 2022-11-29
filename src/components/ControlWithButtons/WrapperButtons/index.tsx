import React from 'react';
import {WrapperButtonsInterface} from "./WrapperButtons.interface";

const WrapperButtons = ({children} : WrapperButtonsInterface) =>  {
    return (
        <>
            {children}
        </>
    );
};

export default WrapperButtons;
