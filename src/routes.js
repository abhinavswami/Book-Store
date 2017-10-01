import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';
import BookDetailsPage from './components/book/BookDetailsPage';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/books/:id" component={BookDetailsPage}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/books" component={Book}></Route>
                
            </Switch>
        );
    }
}