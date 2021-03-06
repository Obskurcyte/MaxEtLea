import React from 'react';
import Header from "../components/Header";
import {Formik} from "formik";
import './LoginScreen.css';
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next";


const LoginScreen = props => {

  const { t, i18n } = useTranslation();

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
                    <label>{t("Login.1")}</label>
                    <input type="text" onChange={props.values.email}/>
                  </div>
                  <div className="user-password">
                    <label>{t("Login.2")}</label>
                    <input type="text" onChange={props.values.password}/>
                  </div>
                  <div className="remember-me">
                    <input type="checkbox"/>
                    <p>{t("Login.3")}</p>
                  </div>
                <div className="login-submit">
                  <button className="login-button">{t("Login.4")}</button>
                </div>
                <div className="password-forgotten-link">
                  <a href="/register" className="register-link">{t("Login.5")}</a>
                  <a href="/forgotten-password">{t("Login.6")}</a>
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
