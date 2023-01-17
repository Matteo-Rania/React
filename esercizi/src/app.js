import React from "react";
import { Container } from "./Container";
import { Login } from "./Login";
import { Welcome } from "./Welcome";


export class App extends React.Component{
    render(){
        return (
            <Container title='component composition'>
                <Welcome name='matteo' />
                <Login />
            </Container>
        )
    }
}