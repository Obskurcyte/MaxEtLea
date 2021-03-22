import gql from "graphql-tag";
import client from "../../components/ApolloClient";
import {GET_BLOG} from "./blog";


export const GET_COMMANDES = 'GET_COMMANDES';
export const CREATE_COMMANDE = 'CREATE_COMMANDE';
const userID = localStorage.getItem('userID');

const COMMANDES_QUERY = gql `query GetOrdersForUser {
  orders(where: {customerId: ${userID}}) {
    nodes {
      billing {
        address1
        address2
        city
        country
        company
        email
        firstName
        lastName
        phone
        postcode
      }
      lineItems {
        nodes {
          product {
            name
          }
          subtotal
          total
        }
      }
      shipping {
        address1
        address2
        city
        company
        country
        email
        firstName
        lastName
      }
      shippingLines {
        nodes {
          shippingMethod {
            title
            description
          }
        }
      }
      shippingTotal
      subtotal
      total
    }
  }
}`;

const CREATE_COMMANDE_QUERY = gql `mutation CreateOrder {
  __typename
  createOrder(input: {status: PROCESSING, shipping: {address1: "1 rue de paris", city: "Paris", email: "theodore.davray.97@gmail.com", country: FR, firstName: "Theodore", lastName: "Davray", phone: "0101", postcode: "91190", state: "Essone"}, billing: {address1: "1 rue de paris 2", city: "Paris", address2: "", country: FR, company: "", email: "theodore.davray.97@gmail.com", firstName: "Theodore", lastName: "Davray", overwrite: true, phone: "0101", postcode: "91190", state: "Essone"}, lineItems: {productId: 3163, quantity: 2, total: "10", subtotal: "5"}, isPaid: true, feeLines: {amount: "15", total: "15"}, paymentMethod: "cod", shippingLines: {methodId: "cod", methodTitle: "Paiement à la livraison", total: "5"}, customerId: 10}) {
    orderId
  }
}`

export const createCommande = () => {
  return async dispatch => {
    const result = await client.query({query: CREATE_COMMANDE_QUERY});
    const commande_created = result.data;
    console.log(commande_created)
    dispatch({
      type: CREATE_COMMANDE,
      commande_created,
    })
  }
}


export const getCommandes = () => {
  return async dispatch => {
    const result = await client.query({query: COMMANDES_QUERY});
    const commandes = result.data.orders.nodes;
    dispatch({
      type: COMMANDES_QUERY,
      commandes,
    })
  }
};

