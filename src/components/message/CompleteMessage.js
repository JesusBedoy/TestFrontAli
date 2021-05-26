import React from 'react';

const CompleteMessage = (props) => {
    return (
        <div className="container pt-2 pb-2 flex-row d-flex justify-content-end">
            <div className="bg-chat-message rounded p-4 bg-chat-width">
            <h5>{"Fecha de Nacimiento: "+ props.day + " " + props.month + " " + props.year }</h5>
            <h5>{"Correo electronico: "+ props.email}</h5>
            <h5>{"Telefono celular: "+ props.phone}</h5>
                <h5>{"Nombre: "+ props.name +" "+  props.secondName +" "+  props.lastName + " "+  props.motherLastName}</h5>
            </div>
        </div>
    );
};

export default CompleteMessage;