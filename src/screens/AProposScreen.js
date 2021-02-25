import React from 'react';
import Header from "../components/Header";
import "./AProposScreen.css"
import Footer from "../components/Footer";

const AProposScreen = props => {
  return (
    <div>
      <Header />
      <div className="bienvenue">
        <h1 className="bienvenue-title">Bienvenue chez Max & Léa</h1>
      </div>
      <main>
        <p className="Apropos-title">C’est en regardant nos enfants jouer et évoluer que nos premières esquisses se sont profilées. Max & Lea est le fruit d’une bonne dose de créativité et de reflexion pour penser des jouets <span>ludiques, évolutifs et durables.</span></p>
        <div className="container">
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/iStock-478587034-1.jpg" alt="" className="grande-photo"/>
            <div className="paragraphs">
              <div className="paragraph1">
                <img src="https://maxandlea.com/wp-content/uploads/2020/05/dot_1-1.svg" alt="" className="petite-photo1"/>
                <p>Max & Lea <span>c’est l’histoire de deux supers Papa</span> qui aiment profondément leurs jeunes enfants et souhaitent les aider à bien grandir et à s’éveiller. Très préoccupés par les dangers des écrans sur les enfants et par la pollution plastique, ils décident de lancer une gamme de jouets naturels, sains et éducatifs. Ces jouets permettront à chaque enfant d’apprendre en s’amusant. Chaque jouet est pensé évolutif et  s’adaptera à chaque âge de l’enfant qui les gardera et y jouera ainsi plus longtemps.</p>
              </div>
              <div className="paragraph2">
                <img src="https://maxandlea.com/wp-content/uploads/2020/05/dot_3t.svg" alt="" className="petite-photo2"/>
                <p>Avec ses jouets Max & Lea, votre enfant va beaucoup s’amuser. Nos jouets sont pensés pour être 100% ludiques et parfaits pour développer son imagination. </p>
              </div>
              <div className="paragraph3">
                <img src="https://maxandlea.com/wp-content/uploads/2020/05/dot_2t.svg" alt="" className="petite-photo3"/>
                <p>Il <span>s’éveillera et travaillera sa motricité</span> grâce aux innombrables interactions qu’il rencontrera avec nos jouets. Nous croyons au développement par le jeu, c’est pour cette raison que nous dessinons nos produits en pensant à l’utilisation qu’en fera votre petit. Sans cesse penser à ce que nos jouets lui apporteront est LA question principale que nous nous posons à chaque fois que nous développons un nouveau jouet.</p>
              </div>
            </div>
        </div>
        <div className="container container-photo">
          <div className="paragraphs2">
            <div className="paragraph4">
              <img src="https://maxandlea.com/wp-content/uploads/2020/05/dot_4.svg" alt="" className="petite-photo4"/>
              <p>Chez Max & Lea <span>nous croyons que chaque enfant a du talent</span> et qu’il existe un génie en chacun d’eux. Nous savons que chaque enfant a le pouvoir de construire et d’embellir le monde de demain. Nous croyons que c’est en explorant leur propre monde que chaque enfant pourra réaliser et vivre ses rêves. </p>
            </div>
            <div className="paragraph5">
              <img src="https://maxandlea.com/wp-content/uploads/2020/05/dot_1-1.svg" alt="" className="petite-photo5"/>
              <p>C’est pour cela que chez Max & Lea, nous concevons nos jouets avec beaucoup d’amour et en gardant toujours à l’esprit les <span>4 fondements</span> de notre idéal d’éducation : <span>Éveil, Autonomie, Créativité & Plaisir de jouer !</span></p>
            </div>
          </div>
          <div>
            <img src="https://maxandlea.com/wp-content/uploads/2020/06/iStock-623688768-1.jpg" alt="" className="moyenne-photo"/>
          </div>
        </div>
        <div className="card-citation container">
          <div style={{display: 'flex', marginBottom: '5%'}}>
            <i className="fas fa-quote-left"/>
            <p>Nous espérons que nos jouets vous donneront autant satisfaction que nous avons pris de plaisir à les concevoir et à voir nos enfants jouer avec.</p>
          </div>
          <p className="signature">Pierre et Ludovic <br/>
            Les fondateurs de Max & Lea</p>
        </div>
        <div className="container">
          <button className="equipe-button container">Retrouver l'équipe Max et Léa au complet</button>
        </div>
        <div className="container">
          <img src="https://maxandlea.com/wp-content/uploads/2020/06/iStock-912734770-1.jpg" alt="" className="mega-photo"/>
        </div>
      </main>
      <Footer />
    </div>


  )

};

export default AProposScreen;
