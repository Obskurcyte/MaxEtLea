import React, {useEffect} from 'react';
import Header from "../components/Header";
import {Table} from 'react-bootstrap'
import * as commandeActions from '../store/actions/commandes';
import {useDispatch, useSelector} from "react-redux";

const MesCommandesScreen = () => {


  const dispatch = useDispatch();
  const commandes = useSelector(state => state.commande.commandes)

  useEffect(() => {
    dispatch(commandeActions.getCommandes)
  }, [dispatch]);

  console.log(commandes)
  return (
    <div>
      <Header />
      <div className="commandes-container">
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Commande</th>
            <th>Date</th>
            <th>Etat</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MesCommandesScreen;
