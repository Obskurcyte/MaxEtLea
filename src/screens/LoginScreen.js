import React from 'react';
import Header from "../components/Header";
import {Formik} from "formik";
import './LoginScreen.css';
import Footer from "../components/Footer";


const LoginScreen = props => {

  const initialValues = {
    email: '',
    password: ''
  }
  return (
    <div>
      <Header />
      <div className="login-form-container container">
        <div className="login-form">
          <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
          >
            {props => (
              <div>
                  <div className="user-email">
                    <label>Adresse email</label>
                    <input type="text" onChange={props.values.email}/>
                  </div>
                  <div className="user-password">
                    <label>Mot de passe</label>
                    <input type="text" onChange={props.values.password}/>
                  </div>
                  <div className="remember-me">
                    <input type="checkbox"/>
                    <p>Se souvenir de moi</p>
                  </div>
                <div className="login-submit">
                  <button className="login-button">Se connecter</button>
                </div>
                <div className="password-forgotten-link">
                  <a href="/register" className="register-link">S'inscrire</a>
                  <a href="/forgotten-password">Mot de passe oublié ?</a>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default LoginScreen
