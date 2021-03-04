import React, {Suspense} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AProposScreen from "./screens/AProposScreen";
import BlogScreen from "./screens/BlogScreen";
import ContactScreen from "./screens/ContactScreen";
import ShopScreen from "./screens/ShopScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PlayBoardScreen from "./screens/PlayBoardScreen";
import XylophoneScreen from "./screens/XylophoneScreen";
import TourScreen from "./screens/TourScreen";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import productReducer from "./store/reducers/product";


const rootReducer = combineReducers({
  product: productReducer,
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
    <Suspense fallback="loading">
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/about" component={AProposScreen} />
      <Route path="/blog" component={BlogScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Route path="/shop" component={ShopScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/playboard" component={PlayBoardScreen} />
      <Route path="/xylophone" component={XylophoneScreen} />
      <Route path="/tour" component={TourScreen} />
    </Router>
    </Suspense>
    </Provider>
  );
}

export default App;
