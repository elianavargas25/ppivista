import React from 'react';
import ProfileComponent from '../components/ProfileComponent';
import ProfileForm from '../components/ProfileFormIngresos';
import '../styles/ProfileNew.css'
import axios from 'axios';

class ProfileNew extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                fecha: '',
                valoringreso: '',
                categoria: '',
                descripcioningreso: '',
                twitter: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }

    render() {
        return (
            <React.Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <ProfileComponent
                                fecha={this.state.form.fecha}
                                valoringreso={this.state.form.valoringreso}
                                categoria={this.state.form.categoria}
                                descripcioningreso={this.state.form.descripcioningreso}
                                twitter={this.state.form.twitter}
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