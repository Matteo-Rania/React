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
                    {(language) =>{
                        return(
                         <div>
                            {text[language].CURRENT_TITLE},
                            {language === 'en' ? <h1 >The selected language is: <span className="uppercase">{language}</span></h1>
                             : <h1>La lingua selezionata è: <span className="uppercase">{language}</span></h1>}
                        </div>
                        
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}