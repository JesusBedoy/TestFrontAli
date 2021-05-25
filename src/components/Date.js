import React from 'react';

const Date = (props) => {
    return (
        <div className="container pt-2 pb-2 flex-row d-flex">
        <img className="img-chat mr-4" src={props.image} />
        <div className="bg-chat-forms rounded p-2 w-100">
            <h5>¿Cuál es tu fecha de nacimiento?</h5>
            <form>
                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <input type="number" class="form-control" id="day" placeholder="Dia" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <input type="number" class="form-control" id="month" placeholder="mes" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <input type="number" class="form-control" id="year" placeholder="Año" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Date;