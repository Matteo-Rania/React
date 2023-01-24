import { useState } from "react";

export function useLogin() {
    const [data, setData] = useState({
        username : '',
        password : '',
        remember : false,
    })

    const handleInputChange = (event) => {
        const {name,type,value,checked} = event.target;

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value

            }
        })
    }
    return{
        data : data,
        onInputChange : handleInputChange
    }
}