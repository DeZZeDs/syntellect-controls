import React from 'react';
import {SuggestionItemInterface} from "./SuggestionItem.interface";
import styles from "./SuggestionItem.module.css";


const SuggestionItem = ({country, fullName, image, onClick, textEmpty}: SuggestionItemInterface): JSX.Element => {
    const selectCurrentSuggestion = (country: string) => {
        if(onClick) {
            onClick(country);
        }
    }

    if(textEmpty) {
        return <div className={styles.item}>{textEmpty}</div>
    }

    return (
        <div className={styles.item} onClick={() => selectCurrentSuggestion(country? country : '')}>
            <div>
                {country}
            </div>
            <div>
                {fullName}
            </div>
            <div>
                <img src={image} alt={country}/>
            </div>
        </div>
    );
};

export default SuggestionItem;
