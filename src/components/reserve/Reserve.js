import React from 'react';
import reservationImg from '../../images/reservation.jpg';
import axios from 'axios';
import './Reserve.css';

const nameErrorMessage = 'El nombre es obligatorio y solo puede tener caracteres alfabéticos';
const emailErrorMessage = 'El correo debe estar en un formato correcto '+
  '(ejemplos: ejemplo@gmail.com, ejemplo.2@correo.es,...)';
const phoneErrorMessage = 'Debe introducir un número de teléfono correcto y sin espacios entre los números '+
  '(ejemplos: 987654321, 654321987,...)';
const reserveDateErrorMessage = 'Debe introducir una fecha correcta. '+
  'La reserva debe de hacerse con un mínimo de un día de antelación';
const reserveHourErrorMessage = 'Debe introducir una hora correcta. '+
  'Si desea otra hora, puede especificarlo en \"Observaciones\"';
const numberDinersErrorMessage = 'Debe introducir un número correcto de comensales '+
  '(ejemplos: 2, 3, 4, 12,...). Para un número mayor de '+
  '20 personas debe ponerse en contacto directo con el restaurante';
const preferedPlaceErrorMessage = 'Debe eligir una zona preferente';

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
      name: localStorage.nameHacebucheInput ? localStorage.nameHacebucheInput : '',
      email: localStorage.emailHacebucheInput ? localStorage.emailHacebucheInput : '',
      phone: localStorage.phoneHacebucheInput ? localStorage.phoneHacebucheInput : '',
      reserveDate: '',
      reserveHour: localStorage.reserveHourHacebucheInput ? localStorage.reserveHourHacebucheInput : '13:30',
      numberDiners: localStorage.numberDinersHacebucheInput ? localStorage.numberDinersHacebucheInput : '', 
      preferedPlace: localStorage.preferedPlaceHacebucheInput ? localStorage.preferedPlaceHacebucheInput : 'Terraza',
      observations: localStorage.observationsHacebucheInput ? localStorage.observationsHacebucheInput : '',
      nameError: false,
      emailError: false,
      phoneError: false,
      reserveDateError: false,
      reserveHourError: false,
      numberDinersError: false,
      preferedPlaceError: false
    };

    this.validateName = this.validateName.bind(this);
    this.validateEmail= this.validateEmail.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.validateReserveDate = this.validateReserveDate.bind(this);
    this.validateReserveHour = this.validateReserveHour.bind(this);
    this.validateNumberDiners = this.validateNumberDiners.bind(this);
    this.validatePreferedPlace = this.validatePreferedPlace.bind(this);
    this.keepInputValues = this.keepInputValues.bind(this);
    this.transformDate = this.transformDate.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.cleanInputs = this.cleanInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateName() {
    let pattern = /^[A-Ñ-Za-ñ-záéíóúÁÉÍÓÚ]+\s?([A-Ñ-Za-ñ-záéíóúÁÉÍÓÚ]+\s?)*$/;

    return ({
      validated: pattern.test(this.state.name),
      errorMessage: nameErrorMessage
    });
  }

  validateEmail() {
    let pattern = /^.+@.+\.[a-z]+$/;

    return ({
      validated: pattern.test(this.state.email),
      errorMessage: emailErrorMessage
    });
  }

  validatePhone() {
    let pattern = /^\d{9}$/;

    return ({
      validated: pattern.test(parseInt(this.state.phone)),
      errorMessage: phoneErrorMessage
    });
  }

  validateReserveDate() {
    if (this.state.reserveDate != '') {
      let currentDate = new Date();
      let reserveDateToValidated = new Date(this.state.reserveDate);

      return ({
        validated: reserveDateToValidated > currentDate,
        errorMessage: reserveDateErrorMessage
      });
    }
    
    return ({
      validated: false,
      errorMessage: reserveDateErrorMessage
    });
  }

  validateReserveHour() {
    let pattern = /^\d{2}:\d{2}$/;

    return ({
      validated: pattern.test(this.state.reserveHour),
      errorMessage: reserveHourErrorMessage
    });
  }

  validateNumberDiners() {
    let pattern = /^[1-9]\d?$/;
    let numberDinersToValidated = parseInt(this.state.numberDiners);
    let validated = true;

    if (pattern.test(numberDinersToValidated)) {
      if (numberDinersToValidated < 1 || numberDinersToValidated > 20) {
        validated = false;
      }
      else {
        this.setState({ 
          numberDiners: numberDinersToValidated
        }, () => { localStorage.numberDinersHacebucheInput = this.state.numberDiners; });
      }

      return ({
        validated: validated,
        errorMessage: numberDinersErrorMessage
      });
    }
    
    return ({
      validated: false,
      errorMessage: numberDinersErrorMessage
    });
  }

  validatePreferedPlace() {
    return ({
      validated: (this.state.preferedPlace != 'Terraza' || this.state.preferedPlace != 'Local'),
      errorMessage: preferedPlaceErrorMessage
    });
  }

  validateData() {
    return ([
      ['nameError', this.validateName()],
      ['emailError', this.validateEmail()],
      ['phoneError', this.validatePhone()],
      ['reserveDateError', this.validateReserveDate()],
      ['reserveHourError', this.validateReserveHour()],
      ['numberDinersError', this.validateNumberDiners()],
      ['preferedPlaceError', this.validatePreferedPlace()]
    ]);
  }

  keepInputValues() {
    localStorage.nameHacebucheInput = this.state.name;
    localStorage.emailHacebucheInput = this.state.email;
    localStorage.phoneHacebucheInput = this.state.phone;
    localStorage.reserveHourHacebucheInput = this.state.reserveHour;
    localStorage.preferedPlaceHacebucheInput = this.state.preferedPlace;
    localStorage.observationsHacebucheInput = this.state.observations;
  }

  transformDate() {
    const reserveDateInput = new Date(this.state.reserveDate);
    let year = reserveDateInput.getFullYear();
    let month = reserveDateInput.getMonth() + 1;
    let day = reserveDateInput.getDate();

    if (month<10) {
      month = `0${month}`;
    }
    if (day<10) {
      day = `0${day}`;
    }

    let reserveDateNewFormat = `${day}/${month}/${year}`;

    this.setState({ reserveDate: reserveDateNewFormat }, () => { this.sendMail(); });
  }

  cleanInputs() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      reserveDate: '',
      reserveHour: '13:30',
      numberDiners: '',
      preferedPlace: 'Terraza',
      observations: ''
    });
  }

  sendMail() {
    const url = 'https://hacebuche-api.herokuapp.com/api/mail';
    let requestHeaders = { 'Content-Type':'application/json ' };

    axios.post(url, this.state, { headers: requestHeaders })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    this.cleanInputs();
  }

  handleChange(event) {
    const input = event.target.name;
    let value = event.target.value;

    this.setState({
      [input]: value
    });
  }

  handleClick() {
    let validatedInputs = new Map(this.validateData());
    let validatedData = true;

    for (let [inputNameError, validatedInput] of validatedInputs) {
      if (!validatedInput.validated) {
        this.setState({
          [inputNameError]: validatedInput.errorMessage
        });    
        validatedData = false;
      }
      else {
        this.setState({
          [inputNameError]: false
        });
      }
    }

    if (validatedData) {
      this.keepInputValues();
      this.transformDate();
    }
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