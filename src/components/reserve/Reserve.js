import React from 'react';
import reservationImg from '../../images/reservation.jpg';
import axios from 'axios';
import './Reserve.css';

function Header() {
  return (
    <header className="">
      <img className="w3-image" src={reservationImg} alt="Reserva" />
    </header>
  );
}

function CardHeader() {
  return (
    <div className="w3-container card-header w3-center">
      <h2>Datos de la reserva</h2>
    </div>
  );
}

class CardForm extends React.Component {
  render() {
    return (
      <form className="w3-container">
        <p>
          <label>Nombre</label>
        </p>
        <input 
          className="w3-input border w3-round-large w3-animate-input" 
          name="name"
          type="text" 
          value={this.props.inputsValue.name}
          onChange={this.props.onChange}
        />   
        <br />
        <p>  
          <label>Correo electrónico</label>
        </p>
        <input 
          className="w3-input border w3-round-large w3-animate-input" 
          name="email"
          type="text" 
          value={this.props.inputsValue.email}
          onChange={this.props.onChange}
        />
        <br />
        <p>  
          <label>Teléfono</label>
        </p>
        <input 
          className="w3-input border w3-round-large w3-animate-input" 
          name="phone"
          type="text" 
          value={this.props.inputsValue.phone}
          onChange={this.props.onChange}
        />
        <br />
        <p>  
          <label>¿Para qué día?</label>
        </p>
        <input 
          className="w3-input border w3-round-large" 
          name="reserveDate"
          type="date" 
          value={this.props.inputsValue.reserveDate}
          onChange={this.props.onChange}
        />
        <br />
        <p>  
          <label>¿A qué hora?</label>
        </p>
        <select 
          className="border"
          name="reserveHour"
          value={this.props.inputsValue.reserveHour}
          onChange={this.props.onChange}
          >
          <option value="13:30">13:30</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="21:30">21:30</option>
          <option value="22:00">22:00</option>
          <option value="22:30">22:30</option>
          <option value="23:00">23:00</option>
        </select>
        <br />
        <p>  
          <label>¿Cuántas personas?</label>
        </p>
        <input 
          className="w3-input border w3-round-large w3-animate-input" 
          name="numberDiners"
          type="text" 
          value={this.props.inputsValue.numberDiners}
          onChange={this.props.onChange}
        />
        <br />
        <p>  
          <label>¿Dónde prefieres?</label>
        </p>
        <div>
          <input 
            className="w3-radio"
            type="radio" 
            name="preferedPlace" 
            value="Terraza" 
            checked={this.props.inputsValue.preferedPlace === 'Terraza'}
            onChange={this.props.onChange}
          />
          <label className="radioLabel">Terraza</label>
          <br />
          <input 
            className="w3-radio" 
            type="radio" 
            name="preferedPlace" 
            value="Local" 
            checked={this.props.inputsValue.preferedPlace === 'Local'}
            onChange={this.props.onChange}
          />
          <label className="radioLabel">Local</label>
        </div>
        <br />
        <p>  
          <label>¿Alguna observación a tener en cuenta?</label>
          <br />
          <label>(Una hora más específica, alergias, productos para celíacos,...)</label>
        </p>
        <textarea 
          className="border" 
          name="observations"
          value={this.props.inputsValue.observations}
          onChange={this.props.onChange}>
        </textarea> 
        <hr />
      </form>
    );
  }
}

class CardFormButton extends React.Component {
  render() {
    return (
      <div className="button-container w3-container">
        <button 
          className="w3-xlarge w3-round-large"
          onClick={this.props.onClick}
        >
          Enviar
        </button>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="w3-card">
        <CardHeader />
        <CardForm
          onChange={this.props.onChange}
          inputsValue={this.props.inputsValue}
        />
        <CardFormButton 
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

function HeaderHaceBOT() {
  return (
    <div>
      <h3 className="w3-center">¡Puedes reservar hablando directamente con nuestro asistente personal!</h3>
      <p className="w3-center">Comienza hablándole con un "Quiero reservar" o con un "Me gustaría una mesa". Puedes decirle para qué día sería, a qué hora, a qué nombre,... ¡Tan solo contesta a sus preguntas y él realizará la reserva por ti!</p>
    </div>
  );
}

function IframeHaceBOT() {
  return (
    <div className="bot">
      <HeaderHaceBOT />
      <iframe className="iframeBot"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/500df353-f7b9-40d9-88f3-6b044a737fc7">
      </iframe>
    </div>
  );
}

function ModalErrorHeader() {
  return (
    <div className="w3-container w3-center w3-red">
      <span className="w3-button w3-display-topright">&times;</span>
      <h2>¡Ups! Ha ocurrido un error</h2>
    </div>
  );
}

class ModalErrorContent extends React.Component {
  render() {
    return (
      <div className="w3-container">
        <p>Uno o más datos introducidos no son correctos:</p>
        <br />
        <hr />
        <p>Revise bien los datos antes de pulsar en el botón "Enviar"</p>
      </div>
    );
  }
}

class ModalError extends React.Component {
  render() {
    return (
      <div className="w3-modal">
        <div className="w3-modal-content w3-animate-top w3-card-4">
          <ModalErrorHeader />
          <ModalErrorContent />
        </div>
      </div>
    );
  }
}

function ModalCorrectHeader() {
  return (
    <div className="w3-container w3-center w3-green">
      <span className="w3-button w3-display-topright">&times;</span>
      <h2>¡Solicitud enviada!</h2>
    </div>
  );
}

function ModalCorrectContent() {
  return (
    <div className="w3-container">
      <p>Tu solicitud de reserva ha sido enviada</p>
      <p>Revise su correo y espere a que podamos confirmar su reserva</p>
      <br />
      <p>¡Nos vemos pronto en el mesón!</p>
    </div>
  );
}

class ModalCorrect extends React.Component {
  render() {
    return (
      <div className="w3-modal">
        <div className="w3-modal-content w3-animate-opacity w3-card-4">
          <ModalCorrectHeader />
          <ModalCorrectContent />
        </div>
      </div>
    );
  }
}

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      reserveDate:'',
      reserveHour:'13:30',
      numberDiners:'',
      preferedPlace:'',
      observations:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const input = event.target.name;
    let value = '';
    
    if (input === 'phone' || input === 'numberDiners') {
      value = parseInt(event.target.value);
    }
    else {
      value = event.target.value;
    }

    this.setState({
      [input]: value
    });
  }

  handleClick() {
    const url = 'https://hacebuche-api.herokuapp.com/api/mail'
    let requestHeaders = {
      'Content-Type':'application/json '
    };

    axios.post(url, this.state, { headers: requestHeaders })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="w3-content w3-padding-64">
          <Card
            onChange={this.handleChange}
            onClick={this.handleClick}
            inputsValue={this.state}
          />
          <IframeHaceBOT />
          <ModalError />
          <ModalCorrect />
        </div>
      </div>
    );
  }
}

export default Reserve;