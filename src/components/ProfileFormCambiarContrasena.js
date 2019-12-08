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
               <br></br>
                <br></br>
                <br></br>
                <h2>Cambiar Contraseña</h2>

                <form className="border border-info" onSubmit={this.handleSubmit} >
                    <br></br>
                    <div className="form-group">
                        <label>* Usuario</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="usuario"
                            value={this.props.formValues.usuario}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>* Contraseña Actual</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="contrasenaactual"
                            value={this.props.formValues.contrasenaactual}
                            required
                        />
                    </div>
                    <div className="form-group"  required>
                    
                        <label>* Nueva Contraseña</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="nuevacontrasena"
                            value={this.props.formValues.nuevacontrasena}
                            required
                        />
                    </div>
                     
                    <div className="form-group">
                        <label>* Confirmar Nueva Contraseña</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="confirnuevacontrasena"
                            value={this.props.formValues.confirnuevacontrasena}
                            required
                        />
                    </div>

                    
                         <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                        
                </form>
            </React.Fragment>
                    )
                }
            }
            
export default ProfileFormComponent;