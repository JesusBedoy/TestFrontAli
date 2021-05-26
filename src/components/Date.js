import React from 'react';

const Date = (props) => {
    return (
        <div className="container pt-2 pb-2 flex-row d-flex">
            <img className="img-chat mr-4" src={props.image} />
            <div className="bg-chat-forms rounded p-2 w-100">
                <h5>¿Cuál es tu fecha de nacimiento?</h5>
                <form>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="number" className="form-control"
                                id="day" placeholder="Dia"
                                min="1" max="31" name="day"
                                disabled={props.date}
                                onChange={props.functionDate} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <select class="form-control" id="month"
                                placeholder="mes" name="month"
                                disabled={props.date}
                                onChange={props.functionDate}>
                                <option selected>Selecciona el mes</option>
                                <option value="Enero">Enero</option>
                                <option value="Febrero">Febrero</option>
                                <option value="Marzo">Marzo</option>
                                <option value="Abril">Abril</option>
                                <option value="Mayo">Mayo</option>
                                <option value="Junio">Junio</option>
                                <option value="Julio">Julio</option>
                                <option value="Agosto">Agosto</option>
                                <option value="Septiembre">Septiembre</option>
                                <option value="Octubre">Octubre</option>
                                <option value="Noviembre">Noviembre</option>
                                <option value="Diciembre">Diciembre</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="number" className="form-control"
                                id="year" placeholder="Año"
                                min="1900" name="year"
                                disabled={props.date}
                                onChange={props.functionDate} />
                        </div>
                    </div>
                </form>
                <div className="d-flex justify-content-end">
                    {props.date !== true ? <button className="btn btn-primary" onClick={() => props.functionSubmite('date')}>Enviar</button>
                    : null}
                    </div>
            </div>
        </div>
    );
};

export default Date;