import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const text = {
    en: {
        CURRENT_TITLE: 'my website'
    },
    it: {
        CURRENT_TITLE: 'il mio sito web'
    }
}

export function DisplayLanguage() {

    const language = useContext(LanguageContext);
        return (
            <div>
                <div>
                   <h1>{text[language].CURRENT_TITLE}</h1>
                </div>
            </div>
        )

}