// Babel polyfill will emulate a full ES2015 environment so we can enjoy goodies
// like Promises
import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import {createHashHistory} from 'history';
import Routes from './routes';
import configureStore from './store/configureStore';
import App from './components/App';
import * as bookActions from './actions/bookActions';

const store = configureStore();
const history = createHashHistory();
store.dispatch(bookActions.fetchBooks());
render(
    <Provider store={store}>
    <Router history={history}>
        <div>
            <App/>
            <Routes/>
        </div>
    </Router>
</Provider>, document.getElementById('app'));