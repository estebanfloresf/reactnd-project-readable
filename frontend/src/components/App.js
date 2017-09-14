import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'

import '../css/App.css';
import noPage from '../components/noPage';
import Home from '../components/Home';

class App extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

                    <Link className="navbar-brand" to="/">Readable Project</Link>
                </nav>

                <div className="container">

                    <Switch>
                        <Route exact path="/" component={Home}>

                        </Route>
                        <Route component={noPage}/>
                    </Switch>
                </div>


            </div>
        );
    }
}

export default App;
