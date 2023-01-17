import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from './DisplayLanguage';


export class App extends React.Component{
    state = {
        lenguage: 'en'
    }
    
    handleLenguage = (event) => {
        this.setState({
            lenguage: event.target.value
        })
    }
    render() {
        return(
            <div className="border-2 border-red-500 p-2 m-3 ">
                <select value={this.state.lenguage} onChange={this.handleLenguage} className='mb-2'>
                    <option value= 'en' >English</option>
                    <option value= 'it' >Italiano</option>
                </select>
                <LanguageContext.Provider value={this.state.lenguage}>      
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}
