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

                <form className="border border-info" onSubmit={this.handleSubmit} >
                    <br></br>
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
                        <label>Valor del Egreso</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="valoregresos"
                            value={this.props.formValues.valoregresos}
                        />
                    </div>
                    <div className="form-group">
                    <label>Categoria Egreso</label>
                        <div class="radio">
                            <label><input type="radio" name="optradio" checked></input>   Option 1</label>
                        </div>
                            <div class="radio">
                                <label><input type="radio" name="optradio"></input>   Option 2</label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="optradio"></input>   Option 3</label>
                            </div>
                                
                     </div>
                    <div className="form-group">
                        <label>Descripción del Egreso</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTidescripcionegresostle"
                            value={this.props.formValues.descripcionegresos}
                        />
                    </div>

                    <label>Tipo de Egreso</label>
                    <div className="form-group">
                        <div class="radio">
                            <label><input type="radio" name="optradio1" checked></input>   Option 1</label>
                        </div>
                            <div class="radio">
                                <label><input type="radio" name="optradio1"></input>   Option 2</label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="optradio1"></input>   Option 3</label>
                            </div>
                                
                     </div>

                         <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </React.Fragment>
                    )
                }
            }
            
export default ProfileFormComponent;