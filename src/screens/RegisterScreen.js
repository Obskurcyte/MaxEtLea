import React from 'react';
import Header from "../components/Header";
import {Formik} from "formik";
import './LoginScreen.css';
import Footer from "../components/Footer";
import './RegisterScreen.css';

const RegisterScreen = props => {

  const initialValues = {
    email: '',
    password: '',
    username:''
  }
  return (
    <div>
      <Header />
      <div className="register-form-container container">
        <div className="register-form">
          <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
          >
            {props => (
              <div>
                <div className="user-username">
                  <label>Nom d'utilisateur</label>
                  <input type="text" value={props.values.username} onChange={props.values.username}/>
                </div>
                <div className="user-register-email">
                  <label>Adresse email</label>
                  <input type="text" onChange={props.values.email}/>
                </div>
                <div className="user-password">
                  <label>Mot de passe</label>
                  <input type="text" onChange={props.values.password}/>
                </div>
                <div className="register-connexion">
                  <div className="login-submit">
                    <button className="login-button">S'inscire</button>
                  </div>
                  <div className="connect-link">
                    <a href="/login">Se connecter</a>
                </div>
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

export default RegisterScreen;
