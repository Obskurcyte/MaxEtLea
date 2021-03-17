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
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import PaiementScreen from "./screens/PaiementScreen";
import PaiementRecapScreen from "./screens/PaiementRecapScreen";
import BlogMathScreen from "./screens/BlogMathScreen";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import productReducer from "./store/reducers/product";
import blogReducer from "./store/reducers/blog";
import {AppProvider} from "./context/AppContext";



const rootReducer = combineReducers({
  product: productReducer,
  blog: blogReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <AppProvider>
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
      <Route path="/cart" component={CartScreen} />
      <Route path="/checkout" component={CheckoutScreen} />
      <Route path="/payment" component={PaiementScreen} />
      <Route path="/payment-recap" component={PaiementRecapScreen} />
      <Route path="/blog-math" component={BlogMathScreen} />
    </Router>
    </Suspense>
    </Provider>
    </AppProvider>
  );
}

export default App;
