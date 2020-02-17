import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/routes/Home'
import About from './components/routes/About'
import Contact from './components/routes/Contact'
import NavBar from './components/NavBar'
import * as serviceWorker from './serviceWorker';

// const store = createStore(rootReducer, applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



