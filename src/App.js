import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './components/home/Home';

class Navbar extends React.Component {
  render() {
    return (
      <div className="w3-top">
        <div className="grey w3-bar w3-padding w3-card">
          <div className="bloc-logo">
            <a className="logo-mask" onClick={() => this.props.goTop()}>Home</a>
          </div>
          <div className="w3-right w3-hide-medium w3-hide-small">
            <a className="w3-bar-item w3-button" onClick={() => this.props.goTop()}>Nuestra Carta</a>
            <a className="w3-bar-item w3-button" onClick={() => this.props.goTop()}>Nuestros Vinos</a>
            <a className="w3-bar-item w3-button" onClick={() => this.props.goTop()}>Reserva</a>
          </div>

          <a 
            href="javascript:void(0)" 
            className="w3-bar-item w3-button w3-right w3-hide-large" 
            onClick={() => this.props.navOpen()}
          >
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    );
  }
}

class CollapseNavbar extends React.Component {
  render() {
    return (
      <nav className={this.props.navClass}>
        <div className="close-nav">
          <a 
            href="javascript:void(0)"
            className="w3-bar-item w3-button w3-large w3-padding-16"
            onClick={() => this.props.navClose()}
            >
            Cerrar <span>X</span>
          </a>
        </div> 
        <a className="w3-bar-item w3-button" onClick={() => this.props.navClose()}>Nuestra Carta</a>
        <a className="w3-bar-item w3-button" onClick={() => this.props.navClose()}>Nuestros Vinos</a>
        <a className="w3-bar-item w3-button" onClick={() => this.props.navClose()}>Reserva</a>
      </nav>
    );
  }
}

function Footer() {
  return (
    <footer className="w3-black w3-padding-64">
      <div className="w3-center ">
        <div className="w3-xlarge w3-section">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </div>
      </div>
      <div className="w3-content w3-container">
        <div className="w3-row w3-section">
          <div className="w3-col m2 w3-container"></div>
          <div className="w3-col m10 w3-panel">
            <div className="w3-large">
              <i className="fa fa-map-marker fa-fw w3-xlarge w3-margin-right"></i> Mesón Hacebuche, Plaza Guerrero Muñoz, Antequera, España
              <hr />
              <i className="fa fa-phone fa-fw w3-xlarge w3-margin-right"></i> Teléfono: +34 952 84 65 74
              <hr />
              <i className="fa fa-envelope fa-fw w3-xlarge w3-margin-right"></i> Email: hacebuchemeson@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        navIsHidden: true,
        navClassName: 'w3-sidebar w3-bar-block grey w3-card w3-animate-left responsive-nav-hidden'
    };
  }

  goTop() {
    window.scrollTo(0, 0);
  }

  navOpen() {
    if (this.state.navIsHidden) {
      this.setState({
        navIsHidden: false,
        navClassName: 'w3-sidebar w3-bar-block grey w3-card w3-animate-left responsive-nav-enabled'
      });
    }
    else {
      this.navClose();
    }
  }

  navClose() {
    this.setState({
      navIsHidden: true,
      navClassName: 'w3-sidebar w3-bar-block grey w3-card w3-animate-left responsive-nav-hidden'
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar
            goTop={() => this.goTop()}
            navOpen={() => this.navOpen()}
            />
            <CollapseNavbar
              navClass={this.state.navClassName}
              navClose={() => this.navClose()}
            />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
