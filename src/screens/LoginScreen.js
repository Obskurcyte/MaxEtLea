import React, {useState} from 'react';
import Header from "../components/Header";
import {Formik} from "formik";
import './LoginScreen.css';
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next";
import axios from 'axios';
import {Redirect} from "react-router";
import {useHistory} from "react-router";

const LoginScreen = props => {

  const { t, i18n } = useTranslation();

  const [loading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [userNiceName, setUserNiceName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loggedIn, setIsLoggedIn] = useState(false);

  const router = useHistory()
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
            onSubmit={async (values) => {
              const siteUrl = "https://maxandlea.fr"
              const loginData = {
                username: values.email,
                password: values.password
              }
              setIsLoading(true)
              /* const res = await fetch(`${siteUrl}/wp-json/jwt-auth/v1/token`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: values.email,
                  password: values.password
                })
              })
              console.log(res)
              console.log(values.email)
             }

               */

              axios.post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
            .then(res => {
                if (undefined === res.data.token) {
                  setIsLoading(false)
                  return;
                }
                console.log(res.data)
                localStorage.setItem('userID', res.data.user_id)
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userName', res.data.user_nicename);

              setIsLoading(false)
              setToken(res.data.token)
              setUserNiceName(res.data.user_nicename)
              setUserEmail(res.data.user_email)
              setIsLoggedIn(true)

              }).catch(err => {
                setIsLoading(false)
              })

              console.log(loggedIn)
              if (loggedIn || localStorage.getItem('token')) {
                router.push('/')
              }
            }
            }
          >
            {props => (
              <div>
                  <div className="user-email">
                    <label>{t("Login.1")}</label>
                    <input
                      type="text"
                      onChange={props.handleChange('email')}
                      value={props.values.email}
                    />
                  </div>
                  <div className="user-password">
                    <label>{t("Login.2")}</label>
                    <input
                      type="text"
                      onChange={props.handleChange('password')}
                      value={props.values.password}
                    />
                  </div>
                  <div className="remember-me">
                    <input type="checkbox"/>
                    <p>{t("Login.3")}</p>
                  </div>
                <div className="login-submit">
                  <button className="login-button" type="submit" onClick={props.handleSubmit}>{t("Login.4")}</button>
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
