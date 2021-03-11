import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/Header";
import './CheckoutScreen.css';
import {Formik} from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";

import {gql, useQuery, useMutation} from "@apollo/client";
import YourOrder from "../components/YourOrder";
import PaymentModes from "../components/PaymentModes";
import {AppContext} from "../context/AppContext";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const CheckoutScreen = props => {

  const initialValues = {
    nom: '',
    prenom:'',
    adresse: '',
    postalcode: '',
    ville: '',
    pays: '',
    phone: ''
  }

  const countries = [
    {
      value: 'France',
      label: 'France',
    },
    {
      value: 'USA',
      label: 'Etats-Unis',
    },
    {
      value: 'Allemagne',
      label: 'Allemagne',
    },
    {
      value: 'Suisse',
      label: 'Suisse',
    },
  ];



  const [ cart, setCart ] = useContext( AppContext );

  const classes = useStyles();


  return (
    <div>
      <Header />

      <div className="content" style={{padding: '0 10%', marginTop: '5%'}}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values)
          }}
        >
          {props => (
            <form className={classes.root} noValidate autoComplete="off">
              <div style={{display: 'flex', justifyContent: "space-between"}}>
              <div>
              <div>
                <TextField
                  required
                  id="outlined-error"
                  label="Prénom"
                  variant="outlined"
                />
                <TextField
                  id="outlined-error"
                  required
                  label="Nom"
                  variant="outlined"
                />
              </div>
                <div>
                <TextField
                  required
                  id="outlined-error"
                  label="Numéro et nom de rue"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-error"
                  label="Code postal"
                  variant="outlined"
                />
              </div>
                <TextField
                  required
                  label="Ville"
                  variant="outlined"
                />
                <TextField
                  select
                  label="Select"
                  helperText="Veuillez sélectionner un pays"
                  defaultValue="France"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="your-orders">
                {/*	Order*/}
                <h2 className="text-xl font-medium mb-4">Votre commande</h2>
                <YourOrder cart={ cart }/>

                {/*Payment*/}
              </div>
              </div>
              <Link to="/payment">
                <button className="cart-valide">Aller à l'étape suivante</button>
              </Link>
            </form>
          )

          }
        </Formik>
      </div>
    </div>
  )
};

export default CheckoutScreen
