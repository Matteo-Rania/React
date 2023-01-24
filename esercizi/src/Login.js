import { useLogin } from "./useLogin";

export function Login() {
    const {data, onInputChange} = useLogin({})

    console.log(data)

    return (
        <form>
            <input className="border-2 border-sky-500 m-2" name ="username" value ={data.username} onChange ={onInputChange}/>
            <input className="border-2 border-sky-500 m-2" name ="password" type = 'password' value ={data.password} onChange= {onInputChange}/>
            <input className="border-2 border-sky-500 m-2" name ="remember" type='checkbox' value ={data.remember} onChange ={onInputChange}/>
        </form>
    )
}