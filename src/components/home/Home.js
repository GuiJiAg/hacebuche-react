import React from 'react';
import hacebucheImg from '../../images/el-hacebuche.jpg';
import menuImg from '../../images/ham.jpg';
import wineImg from '../../images/wines.jpg';
import reservationImg from '../../images/reservation.jpg';
import './Home.css';

function Header() {
  return (
    <header className="w3-display-container w3-content w3-wide">
      <img className="w3-image" src={hacebucheImg} alt="Hacebuche" />
    </header>
  );
}

function About() {
  return (
    <div className="w3-row w3-padding-64" id="about">
      <div className="w3-col m2 w3-padding-large"></div>
      <div className="w3-col m8 w3-padding-large">
        <h1 className="w3-center">Mesón Hacebuche</h1>
        <br />
        <h5 className="w3-center">Comida de la de siempre</h5>
        <p className="w3-large">El Hacebuche was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
        <p className="w3-large w3-text-grey">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="w3-container w3-padding-64" id="contact">
      <h2 className="w3-center">Consulta nuestra carta y nuestros vinos</h2>
      <p className="w3-center"><em>No olvides preguntarnos sobre nuestros platos cuando nos visites</em></p>
      <p className="w3-center"><em>Siempre tenemos especialidades fuera de carta. ¡Te sorprenderán!</em></p>
      <div className="w3-row w3-padding-64 w3-margin">
        <div className="w3-col m5 w3-container w3-center">
          <div className="w3-card w3-round w3-hover-shadow">
            <a className="linkNoDecoration">
              <img src={menuImg} className="w3-image top-rounded" />
              <h4>Nuestra Carta</h4>
            </a> 
          </div>
        </div>
        <div className="w3-col m2 w3-container">
          <br />
          <br />
        </div>
        <div className="w3-col m5 w3-container w3-center">
          <div className="w3-card w3-round w3-hover-shadow">
            <a className="linkNoDecoration">
              <img src={wineImg} className="w3-image top-rounded" />
              <h4>Nuestros Vinos</h4>
            </a> 
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="w3-container w3-padding-64" id="contact">
      <div className="w3-row">
        <div className="w3-col m5 w3-container">
          <h1>Contacto</h1>
          <br />
          <p>¿Quieres hacer una reserva, organizar algún evento o tienes cualquier pregunta sobre nosotros?</p>
          <p>Puedes contactarnos a nuestro número de teléfono:
            <br />
            <strong>952 84 65 74</strong>
            <br />
            <br />
            O a nuestro correo electrónico:
            <br />
            <strong>hacebuchemeson@gmail.com</strong>
          </p>
        </div>
        <div className="w3-col m2 w3-container">
          <br />
        </div>
        <div className="w3-col m5 w3-container w3-center">
          <div className="w3-card w3-round w3-hover-shadow">
            <a className="linkNoDecoration">
              <img src={reservationImg} className="w3-image top-rounded" />
              <h4>Reserva</h4>
            </a> 
          </div>
        </div>
      </div>
      <br />
      <br />
      <a href="https://www.google.com/maps/place/Mes%C3%B3n+Hacebuche/@37.0288132,-4.5578641,12z/data=!4m5!3m4!1s0x0:0xd65ba151b9aec3ff!8m2!3d37.0165881!4d-4.5577524" target="_blank" className="linkNoDecoration">
        <span className="w3-text-blue-grey w3-large w3-hover-text-blue">
          <b>Mesón Hacebuche, Plaza Guerrero Muñoz, Antequera, España</b>
          <i className="fa fa-map-marker fa-fw w3-xlarge w3-margin-left"></i>
        </span>
      </a>
      <div className="w3-row w3-padding-16">
        <div className="w3-col m12 w3-padding-large">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3788.5074399774107!2d-4.559275685585784!3d37.015943154963445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd65ba151b9aec3ff!2sMes%C3%B3n+Hacebuche!5e0!3m2!1ses!2sus!4v1558942223470!5m2!1ses!2sus" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}

class Home extends React.Component {
  render() {
    return (
      <div className="w3-content">
        <Header />
        <About />
        <Links />
        <Contact />
      </div>
    );
  }
}

export default Home;