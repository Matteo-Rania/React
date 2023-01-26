import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";


export function App() {

const [language, setLanguage] = useState('en')

function handleChangeLanguage(event) {
    setLanguage(event.target.value)
}
 
    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>    
                <option value= 'en'>EN</option>
                <option value= 'it'>IT</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
    )
}
