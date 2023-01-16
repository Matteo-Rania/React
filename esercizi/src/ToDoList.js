import React from "react";

export class ToDoList extends React.Component{
    state = {
        items: ['studiare', 'dormire'],
        add: '',
    }
    submitTodo = event => {
        event.preventDefault();
        this.setState({
            items:[...this.state.items, this.state.add],
            add:'',
        })
    }
    addItem = event =>{
        let value = event.target.value
        this.setState({
            add: value,
        })
    }
    resetBtn = (event) => {
        event.preventDefault()
        this.setState({
            items : [],
        })
    }

    render(){
        return(
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.submitTodo}>
                    <input value={this.state.add} onChange={this.addItem} />
                    <button type="submit">Aggiungi</button>
                    <button type="reset" onClick={this.resetBtn}>Reset</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }

}