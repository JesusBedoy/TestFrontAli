import React from 'react';

const Contact = (props) => {
    return (
        <div className="container pt-2 pb-2 flex-row d-flex">
            <img className="img-chat mr-4" src={props.image} />
            <div className="bg-chat-forms rounded p-2 w-100">
                <h5>Datos de contacto</h5>
                <form>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="email" className="form-control"
                            name="email" disabled={props.contact}
                            id="email" placeholder="Correo electronico" 
                            onChange={props.functionContact}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="tel" className="form-control"
                            name="phone" disabled={props.contact}
                            id="phone" placeholder="Teléfono celular (555)-555-5555"
                            onChange={props.functionContact}/>
                        </div>
                    </div>
                </form>
                <div className="d-flex justify-content-end">
                   {props.contact !== true ? <button className="btn btn-primary" onClick={()=>props.functionSubmite('contact')}>Enviar</button> : null} 
                </div>
            </div>
        </div>
    );
};

export default Contact;