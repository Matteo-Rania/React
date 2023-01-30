import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


export function GithubUserList(){

    const [data, setData] = useState ({
        text: '',
        items: []
    })

    function handleFunction (event) {
        setData ((data) => {
            return {
                text: event.target.value,
                items: [...data.items]
            }
        })
    }

    const handleForm = (event) => {
        event.preventDefault ();
        setData ((data) => {
            return {
                text: '',
                items: [...data.items, data.text]
            }
        })
    }

    return (
        <form onSubmit={handleForm}>
            <input className="border-2 border-black rounded-xl p-2 mr-2"  type="text" onChange={handleFunction} />
            <button className="border-2 p-2 rounded-xl border-cyan-500">Show</button>
            <ul>
                {data.items.map((item,index)=>
                <li key={index}>
                    <Link  className="underline text-blue-500" to={item} > Show user {item}</Link>
                </li>
                 )}
            </ul>
            <Outlet />
        </form>
    )
}