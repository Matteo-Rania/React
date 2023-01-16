import React from "react";

export class ToDoList extends React.Component{
    state = {
        items: [],
        add: '',
    }
    submitTodo = event => {
        event.preventDefault();
        this.setState({
            items:[...this.state.items, this.state.add]
        })
    }
    addItem = event =>{
        let value = event.target.value
        this.setState({
            add: value,
        })
    }

    render(){
        return(
            <div>
                <h1>To Do List</h1>
                <ul>
                    {this.state.items.map(item => <li>{item}</li>)}
                </ul>
                <form onSubmit={this.submitTodo}>
                    <input value={this.state.add} onChange={this.addItem} />
                    <button type="submit">Aggiungi</button>
                </form>
            </div>
        )
    }

}