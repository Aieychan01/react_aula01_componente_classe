import React, { Component } from "react";
import './App.css'
 
export default class Messege extends Component {

    state = {
        liguagem: 'React '
    }

    render() {
        return (
            <div className='resultado'>
                <h1>
                    Olá mundo {this.state.liguagem}
                </h1>
                <p>
                    Esse é meu componente de classe :]
                </p>
            </div>
        )
    }
}