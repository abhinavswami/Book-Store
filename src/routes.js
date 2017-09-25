import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/BookPage';

export default class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/books" component={Book}></Route>
            </div>
        );
    }
}