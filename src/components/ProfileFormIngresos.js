import React from 'react';
import axios from 'axios';

class ProfileFormComponent extends React.Component {
    state = {};

    handleClick = e => {
        console.log("Han presionado el boton")
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form submit")
        console.log(this.props.formValues)
        axios.post('https://finanzas-app.mileidyramos23171.now.sh/api/ingresos/', this.props.formValues)
            .then(profile => alert('Profile create <3'))
            .catch(err => alert(err))
    };

    render() {
        return (
            <React.Fragment>
                <h1>Nuevo Ingreso</h1>

                <form className="border border-info" onSubmit={this.handleSubmit} >
                    <div className="form-group" type="date" id="date">
                        <label >Fecha</label>
                        <div className='input-group date' id='datetimepicker3' value={this.props.formValues.fecha}>
                            <input type='date' id="date" className="form-control" />
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-time"></span>
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Valor del Ingreso</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="valoringreso"
                            value={this.props.formValues.valoringreso}
                        />
                    </div>
                    <div className="form-group">
                        <label>categoria Ingreso</label>
                        <select className="custom-select d-block w-100" name="categoria">
                            <option value="">Seleccione una categoria</option>
                            <option value={this.props.formValues.categoria}>Nomina</option>
                            <option value={this.props.formValues.categoria}>Estras</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Descripción del ingresos</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="descripcioningreso"
                            value={this.props.formValues.descripcioningreso}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </React.Fragment>
        )
    }
}

export default ProfileFormComponent;