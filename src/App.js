import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AProposScreen from "./screens/AProposScreen";
import BlogScreen from "./screens/BlogScreen";
import ContactScreen from "./screens/ContactScreen";
import ShopScreen from "./screens/ShopScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/about" component={AProposScreen} />
      <Route path="/blog" component={BlogScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Route path="/shop" component={ShopScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Router>
  );
}

export default App;
