import { FilteredList } from "./FilteredList";

export function App() {
    const list = [
        {id:1, name:"Matteo", age: 22},
        {id:2, name:"Giacomino", age: 12},
        {id:3, name:"Giovannina", age: 67},
        {id:4, name:"Concetta", age: 74},
        {id:5, name:"Luca", age: 8},
    ]
        return(
            <div>
                <FilteredList list={list} />
            </div>
        );
}
