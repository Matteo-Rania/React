import React from "react";

export class Login extends React.Component{
    state = {
        username: '',
        password: '',
        remember: false,
        onLogin: false,
    };
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name] : type === 'checkbox' ? checked : value ,
        })
    }
    handleClick = () => {
        this.setState({
            onLogin : true,
        })
        console.log(this.state.onLogin)
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    

    render() {

        const loginStyle= {
            color : this.state.password.length < 8 ? 'red' : 'green',
        }
        return (
            <div>
                <input 
                name = 'username'
                value ={this.state.username}
                onChange = {this.handleInputChange}
                />
                <input 
                name = 'password'
                type='password'
                value ={this.state.password}
                onChange = {this.handleInputChange}
                />
                <input 
                name = 'remember'
                type='checkbox'
                value ={this.state.username}
                checked ={this.state.remember}
                onChange = {this.handleInputChange}
                />
                <button
                style={loginStyle} 
                onClick={this.handleClick}
                disabled={!this.state.username || !this.state.password}>
                    login
                </button>
                <h1>{this.state.onLogin && `benvenuto ${this.state.username}` }</h1>
            </div>
        )
    }
}