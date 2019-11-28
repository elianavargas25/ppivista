import React from 'react';
import ProfileComponent from '../components/ProfileComponent'
import ProfileForm from '../components/ProfileFormEgresos'
import '../styles/ProfileNew.css'
import axios from 'axios';

class ProfileNew extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            form: {
                fecha:'',
                valoregresos:'',
                categoria:'',
                descripcionegresos:'',
                tipoegreso:''
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
                                        fecha = {this.state.form.fecha} 
                                        valoregresos = {this.state.form.valoregresos} 
                                        categoria = {this.state.form.categoria} 
                                        descripcionegresos = {this.state.form.descripcionegresos}
                                        tipoegreso = {this.state.form.tipoegreso}  
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