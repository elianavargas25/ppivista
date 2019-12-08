import React from 'react';
import ProfileComponent from '../components/ProfileComponent'
import ProfileForm from '../components/ProfileFormCambiarContrasena'
import '../styles/ProfileNew.css'
import axios from 'axios';

class ProfileNew extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            form: {
                usuario:'',
                contrasenaactual:'',
                nuevacontrasena:'',
                confirnuevacontrasena:'',
                
            }
        }
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }

    render(){
        return(
            <React.Fragment>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <ProfileComponent     
                                        fecha = {this.state.form.usuario} 
                                        valoregresos = {this.state.form.contrasenaactual} 
                                        categoria = {this.state.form.nuevacontrasena} 
                                        descripcionegresos = {this.state.confirnuevacontrasena}
                                        
                                        avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                            />
                        </div>
                        <div className="col-6">
                            <ProfileForm 
                                onChange={this.handleChange}
                                formValues={this.state.form} 
                            />
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default ProfileNew;