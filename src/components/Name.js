import React from 'react';

const Name = (props) => {
    return (
        <div className="container pt-2 pb-2 flex-row d-flex">
            <img className="img-chat mr-4" src={props.image} />
            <div className="bg-chat-forms rounded p-2 w-100">
                <h5>¿Cuál es tu Nombre?</h5>
                <form>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="text" class="form-control" id="name" placeholder="Nombre" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="text" class="form-control" id="secondName" placeholder="Segundo nombre" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="text" class="form-control" id="lastName" placeholder="Apellido paterno" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="text" class="form-control" id="motherLastName" placeholder="Apellido materno" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Name;