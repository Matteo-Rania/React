import React from "react";
import { LanguageContext } from "./LanguageContext";

const text = {
    en: {
        CURRENT_TITLE: 'my website'
    },
    it: {
        CURRENT_TITLE: 'il mio sito web'
    }
}

export class DisplayLanguage extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {(lenguage) =>{
                        return(
                         <div>
                            {text[lenguage].CURRENT_TITLE}
                        </div>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}