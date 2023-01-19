import { useState } from "react"

export function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false, 
    })

    function handleInputChange(event) {
        const {name, type,value,checked} = event.target;

        setData({
            ...data,
            [name] : type === 'checkbox' ? checked : value
        })
    }
    console.log(data)

    return (
        <form>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" type= "password" value={data.password} onChange={handleInputChange} />
            <input name="remember" type= "checkbox" value={data.remember} onChange={handleInputChange} />
        </form>
    )
}