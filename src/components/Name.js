import React from 'react';

const Name = (props) => {
    console.log(props);
    return (
        <div className="container pt-2 pb-2 flex-row d-flex">
            <img className="img-chat mr-4" src={props.image} />
            <div className="bg-chat-forms rounded p-4 w-100">
                <h5>¿Cuál es tu Nombre?</h5>
                <form>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="text" 
                            className="form-control" id="name" 
                            placeholder="Nombre" name="name"
                            disabled={props.name} 
                            onChange={props.functionName}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="text" className="form-control" 
                            id="secondName" placeholder="Segundo nombre" name="secondName" 
                            disabled={props.name} 
                            onChange={props.functionName}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="text" className="form-control" 
                            id="lastName" placeholder="Apellido paterno" name="lastName" 
                            disabled={props.name} 
                            onChange={props.functionName}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="text" className="form-control" 
                            id="motherLastName" placeholder="Apellido materno" name="motherLastName" 
                            disabled={props.name} 
                            onChange={props.functionName}/>
                        </div>
                    </div>
                </form>
                <div className="d-flex justify-content-end">
                    {props.name !== true ? 
                    <button className="btn btn-primary" onClick={()=>props.functionSubmite('name')}>Enviar</button>
                    : null}
                    </div>
            </div>
        </div>
    );
};

export default Name;