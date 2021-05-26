import React from 'react';

const ContactMessage = (props) => {
    return (
        <div className="container pt-2 pb-2 flex-row d-flex justify-content-end">
            <div className="bg-chat-message rounded p-4 bg-chat-width">
                <h5>{"Correo electronico: " +props.email}</h5>
                <h5>{"Telefono: " +props.phone}</h5>
            </div>
        </div>
    );
};

export default ContactMessage;