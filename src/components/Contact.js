import React from 'react';

const Contact = (props) => {
    return (
        <div className="container pt-2 pb-2 flex-row d-flex">
            <img className="img-chat mr-4" src={props.image} />
            <div className="bg-chat-forms rounded p-2 w-100">
                <h5>Datos de contacto</h5>
                <form>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="email" class="form-control" id="email" placeholder="Nombre" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="phone" class="form-control" id="phone" placeholder="Teléfono celular" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;