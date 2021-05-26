import './App.css';

import Name from './components/Name';
import Date from './components/Date';
import Contact from './components/Contact';
import Face from './assets/img/face.png';
import { useState } from 'react';
import NameMessage from './components/message/NameMessage';
import DateMessage from './components/message/DateMessage';
import ContactMessage from './components/message/ContactMessage';
import CompleteMessage from './components/message/CompleteMessage';

function App() {

  const [formName, setFormName] = useState({
    name: '',
    secondName: '',
    lastName: '',
    motherLastName: ''
  });
  const [formContact, setFormContact] = useState({
    email: '',
    phone: ''
  });
  const [formDate, setFormDate] = useState({
    day: '',
    month: '',
    year: ''
  });
  const [validator, setValidator] = useState({
    name: '',
    date: '',
    contact: '',
    complete: ''
  })
  const submite = (data) => {
    if (data === "name") {
      setValidator(prevState => ({
        ...prevState,
        name: true
      }))
      console.log("validator: ", validator);
    }
    if (data === "date") {
      setValidator(prevState => ({
        ...prevState,
        date: true
      }))
    }
    if (data === "contact") {
      setValidator(prevState => ({
        ...prevState,
        contact: true
      }))
      console.log("log del valuidatior contact: ", validator);
    }
    if (data === "complete") {
      setValidator(prevState => ({
        ...prevState,
        complete: true
      }))
      console.log("log del valuidatior contact: ", validator);
    }
  }

  const handleFormName = (event) => {
    setFormName({
      ...formName,
      [event.target.name]: event.target.value
    })

    console.log("Evento:", formName);
  }

  const handleFormDate = (event) => {
    console.log(event.target.value);
    setFormDate({
      ...formDate,
      [event.target.name]: event.target.value
    })
  }

  const handleFormContact = (event) => {
    setFormContact({
      ...formContact,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <div className="container-fluid bg-header">
        <div className="p-4 d-flex justify-content-between">
          <div className="font-title">Registro de Usuario</div>
          <img className="img-size" src={require('./assets/img/clipboard.png').default} alt="" />
        </div>
        <div className="p-4">
          <span className="badge badge-pill badge-light"><img className="img-watch" src={require('./assets/img/watch.svg').default} /></span>En menos de 5 munutos.
      </div>
      </div>
      <div className="progress" style={{ height: 3 }}>
        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="container-fluid">
        <Name image={Face}
          {...validator}
          functionName={handleFormName}
          functionSubmite={submite} />
        {validator.name === true ? <div>
          <NameMessage {...formName} />
          <Date image={Face}
            {...validator}
            functionSubmite={submite}
            functionDate={handleFormDate} />
          {validator.date === true ? <div>
            <DateMessage {...formDate} />
            <Contact image={Face}
              {...validator}
              functionSubmite={submite}
              functionContact={handleFormContact} />
            {validator.contact === true ? <div>
              <ContactMessage {...formContact} />
              <div className="d-flex justify-content-center mb-4">
                <div className="col-sm-6 ">
                  <button className="btn btn-primary btn-block" onClick={()=>submite("complete")} >Iniciar</button>
                </div>
              </div>
              {validator.complete === true ? <CompleteMessage {...formName} {...formContact} {...formDate}/> : null}
            </div> : null}
          </div> : null}
        </div> : null}
      </div>
    </div>

  );
}

export default App;
