import React from 'react';
import {ButtonControlInterface} from "./ButtonControl.interface";
import styles from "./ButtonControl.module.css";

const ButtonControl = ({text, onClick,...props} :ButtonControlInterface) : JSX.Element => {
    return (
        <button className={styles.button} {...props} onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonControl;
