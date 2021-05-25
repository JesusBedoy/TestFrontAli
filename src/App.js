import './App.css';
import Name from './components/Name';
import Date from './components/Date';
import Contact from './components/Contact';
import Face from './assets/img/face.png';

function App() {
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
      <div class="progress" style={{ height: 3 }}>
        <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="container-fluid">
        <Name image={Face}/>
        <Date image={Face}/>
        <Contact image={Face}/>
      </div>
    </div>

  );
}

export default App;
