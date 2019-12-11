import React from 'react';
import axios from 'axios';

class ProfileFormComponent extends React.Component{
    state = {};

    handleClick = e => {
        console.log("Han presionado el boton")
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form submit")
        console.log(this.props.formValues)
        axios.post('https://finanzas-app.mileidyramos23171.now.sh/api/users', this.props.formValues)
        .then(profile => alert('Profile create <3'))
        .catch(err => alert(err))
    };

   async componentDidMount(){  
       const res =await axios.get('https://finanzas-app.mileidyramos23171.now.sh/api/users')
        .then(res =>{
            this.setState({
                form: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <React.Fragment>
                <h1>Nuevo Usuario</h1>

                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Nombres</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}

                        />
                    </div>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="UserName"
                            value={this.props.formValues.UserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="password" 
                            name="password"
                            value={this.props.formValues.password}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </React.Fragment>
        )
    }
}

export default ProfileFormComponent;