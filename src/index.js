import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

import  './styles/style.css';

export class App extends Component{
    render(){
        return (
            <>
                <Header/>
            </>
        )
    }
} 

ReactDOM.render(<App/>, document.getElementById('root'));