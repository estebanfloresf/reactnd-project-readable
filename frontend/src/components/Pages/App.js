import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'

import '../../css/App.css';
import noPage from './noPage';
import Home from './Home';
import PostDetail from '../Post/PostDetail';
import CategoryDetail from '../Category/CategoryDetail';


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
                        <Route path="/postdetail/:post" component={PostDetail}/>
                        <Route path="/categorydetail/:category" component={CategoryDetail}/>
                        <Route component={noPage}/>
                    </Switch>
                </div>


            </div>
        );
    }
}

export default App;
