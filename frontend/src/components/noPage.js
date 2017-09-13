import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class noPage extends Component{
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <img src='../../logo.svg' className="App-logo" alt="logo" />
                    <h2>404 Error Page</h2>
                </div>
                <p className="App-intro">
                    Sorry no page found. Head back to <Link to="/">Home</Link>
                </p>
            </div>
        )
    }
}

export default noPage;