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
        axios.post('http://localhost:5700/api/profiles', this.props.formValues)
            .then(profile => alert('Profile create <3'))
            .catch(err => alert(err))
    };

    render() {
        return (
            <React.Fragment>
                <h1>Nuevo Egreso</h1>

                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Fecha</label>
                        <div className='input-group date' id='datetimepicker3' value={this.props.formValues.fecha}>
                            <input type='date' id="date" className="form-control" />
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-time"></span>
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Valor del egreso</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="valoregresos"
                            value={this.props.formValues.valoregresos}
                        />
                    </div>
                    <div className="form-group">
                    <label>Categoria</label>
                    <select className="custom-select d-block w-100">
                    <option value="categoria">Seleccione una categoria</option>
                        <option value="categoria">Choose...</option>
                        <option>United States</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Descripción del egreso</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTidescripcionegresostle"
                            value={this.props.formValues.descripcionegresos}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tipo de ingreso</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </React.Fragment>
        )
    }
}

export default ProfileFormComponent;