import React, {useEffect, useState, useMemo, useRef} from 'react';
import {ControlWithSuggestionsInterface} from "./ControlWithSuggestions.interface";
import {getCountryByName, CountryInfo} from '../../api/apiService';
import {debounce} from "../../helpers";
import SuggestionItem from "./SuggestionItem";
import cn from "classnames";
import styles from "./ControlWithSuggestions.module.css";
import useOutsideClick from "../../hooks/outsideClick";

const ControlWithSuggestions = ({countSuggestions} : ControlWithSuggestionsInterface) => {
    const [dataCountries, setDataCountries] = useState<CountryInfo[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useOutsideClick(inputRef, () => setInputFocus(false));

    const debouncedCountries = useMemo(
        () => debounce((uniqueCountries: React.SetStateAction<CountryInfo[]>) => {
            setDataCountries(uniqueCountries);
        }, 50),
        []
    );

    useEffect(() => {
        try {
            const data = getCountryByName(inputValue, countSuggestions);
            data.then((res) => {
                const uniqueCountries = Array.from(new Set(res));
                debouncedCountries(uniqueCountries);
            })
        }
        catch(e) {
            console.log(e);
        }
    }, [inputValue, debouncedCountries, countSuggestions]);

    const onSelectCountry = (country: string) => {
        setInputValue(country);
        if(inputRef !== null && inputRef.current !== null) {
            inputRef.current.blur();
            setInputFocus(false);
        }
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                value={inputValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                ref={inputRef}
                onFocus={() => setInputFocus((prev) => !prev)}
            />
            <div className={cn(styles.suggestions, {
                [styles.opened]: inputFocus
            })}>
                {
                    dataCountries.length > 0 ?
                        dataCountries.map((country, index) => (
                            <SuggestionItem
                                key={index}
                                country={country.name}
                                image={country.flag}
                                fullName={country.fullName}
                                onClick={() => onSelectCountry(country.name)}
                            />
                            )
                        )
                    :
                        <SuggestionItem textEmpty={"По вашему запросу ничего не найдено"}/>
                }
            </div>
        </div>
    );
};

export default ControlWithSuggestions;
