import React from 'react';

const NameMessage = (props) => {
    console.log("Name message: ",props);
    return (
        <div className="container pt-2 pb-2 flex-row d-flex justify-content-end">
            <div className="bg-chat-message rounded p-4 bg-chat-width">
                <h5>{props.name +" "+  props.secondName +" "+  props.lastName + " "+  props.motherLastName}</h5>
            </div>
        </div>
    );
};

export default NameMessage;