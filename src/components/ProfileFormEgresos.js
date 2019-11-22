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
                <h1>Nuevo Egresos</h1>

                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Fecha</label>
                        <div className='input-group date' id='datetimepicker3'>
                            <input type='text' className="form-control" />
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
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <select className="custom-select d-block w-100">Categoria</select>
                        <option value="">Choose...</option>
                        <option>United States</option>
                    </div>
                    <div className="form-group">
                        <label>Descripción del egreso</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
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