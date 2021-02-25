import React from 'react';
import Header from "../components/Header";
import CardJouet from "../components/CardJouet";

const BlogScreen = props => {
  return (
    <div>
      <Header />
      <div>
        <div className="products-container">
          <div>
            <CardJouet seller="Best Seller" title="La PlayBoard" description="L'outil d'éveil et d'apprentissage le plus complet pour les enfants de 1 à 6 ans." className="jouet1-img"/>
          </div>
          <div>
            <CardJouet title="Le Xylophone" description="Il découvre ses premières notes musicales" className="jouet2-img"/>
            <CardJouet title="Tour Arc en Ciel" description="Organiser les couleurs et les dégradés" className="jouet2-img"/>
          </div>
        </div>
      </div>
    </div>


  )

};

export default BlogScreen;
