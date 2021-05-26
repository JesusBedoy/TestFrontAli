import React from 'react';

const DateMessage = (props) => {
    console.log("date:_",props);
    return (
        <div className="container pt-2 pb-2 flex-row d-flex justify-content-end">
            <div className="bg-chat-message rounded p-4 bg-chat-width">
                <h5>{props.day + " " + props.month + " " + props.year}</h5>
            </div>
        </div>
    );
};

export default DateMessage;