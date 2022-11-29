import React from 'react';
import {ControlWithButtonsInterface} from "./ControlWithButtons.interface";
import styles from "./ControlWithButtons.module.css";
import cn from "classnames";

const ControlWithButtons = ({children, controlState, setControlStates} : ControlWithButtonsInterface): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            {React.Children.map(children, (child: React.ReactElement, index) => {
                    if (child?.props.tag === 'left') {
                        return (<div className={cn(styles.side, styles.sideLeft)}>{child}</div>)
                    }
                }
            )}
            <input className={styles.input}
                   placeholder={"Введите текст"}
                   value={controlState}
                   onChange={(e: React.FormEvent<HTMLInputElement>) => setControlStates(e.currentTarget.value)}
            />
            {React.Children.map(children, (child: React.ReactElement, index) => {
                    if (child?.props.tag === 'right') {
                        return (<div className={styles.side}>{child}</div>)
                    }
                }
            )}
        </div>
    );
};

export default ControlWithButtons;
