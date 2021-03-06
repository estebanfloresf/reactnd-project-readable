import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import '../../css/App.css';
import noPage from './noPage';
import Home from './Home';
import PostDetail from '../Post/PostDetail';
import CategoryDetail from '../Category/CategoryDetail';
import addPost from '../Post/addPost';
import history from '../../history';

class App extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to="/">Readable Project</Link>
                </nav>

                <div className="container">
                        <Switch history={history}>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/addPost" component={addPost}/>
                            <Route exact path="/addPost/:post" component={addPost}/>
                            <Route exact path="/:category/:post" component={PostDetail}/>
                            <Route path="/:category" component={CategoryDetail}/>
                            <Route component={noPage}/>
                        </Switch>
                </div>
            </div>
        );
    }
}

export default App;
