import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
// import logo from '../css/logo.svg';
import '../css/App.css';
import noPage from '../components/noPage';
import Home from '../components/Home';

class App extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Readable Project</a>

                    {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                            {/*data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"*/}
                            {/*aria-expanded="false" aria-label="Toggle navigation">*/}
                        {/*<span className="navbar-toggler-icon"/>*/}
                    {/*</button>*/}

                    {/*<div className="collapse navbar-collapse" id="navbarsExampleDefault">*/}
                        {/*<ul className="navbar-nav mr-auto">*/}
                            {/*<li className="nav-item active">*/}
                                {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href="#">Link</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item dropdown">*/}
                                {/*<a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01"*/}
                                   {/*data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>*/}
                                {/*<div className="dropdown-menu" aria-labelledby="dropdown01">*/}
                                    {/*<a className="dropdown-item" href="#">Action</a>*/}
                                    {/*<a className="dropdown-item" href="#">Another action</a>*/}
                                    {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                        {/*/!*<form className="form-inline my-2 my-lg-0">*!/*/}
                            {/*/!*<input className="form-control mr-sm-2" type="text" placeholder="Search"*!/*/}
                                   {/*/!*aria-label="Search"/>*!/*/}
                            {/*/!*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*!/*/}
                        {/*/!*</form>*!/*/}
                    {/*</div>*/}


                </nav>

                <div className="container">

                    <Switch>
                        <Route exact path="/" component={Home}>

                        </Route>
                        <Route component={noPage}/>
                    </Switch>
                </div>


                <footer>
                    <p>&copy; Readable Project - Udacity Nanodegree 2017</p>
                </footer>

            </div>
        );
    }
}

export default App;
