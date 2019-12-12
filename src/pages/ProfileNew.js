import React from 'react';
import ProfileComponent from '../components/ProfileComponent'
import ProfileForm from '../components/ProfileFormComponent'
import '../styles/ProfileNew.css'
import axios from 'axios';

class ProfileNew extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                UserName: '',
                password: ''
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

    async componentDidMount() {
        const res = await axios.get('https://finanzas-app.mileidyramos23171.now.sh/api/users')
            .then(res => {
                this.setState({
                    form: res.data
                })
            }).catch(err => console.log(err))
    }


    render() {
        return (
            <React.Fragment>
                <div className="ProfileNew__hero">
                    <span className="ProfileNew__hero-text">
                        "Bienvenido a nuestro portal,
                        nos encanta que hagas parte de esta
                        comunidad, SomosPoli!!
                    </span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <ProfileComponent
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                email={this.state.form.email}
                                UserName={this.state.form.UserName}
                                password={this.state.form.password}
                            />
                        </div>
                        <div className="col-6">
                            <ProfileForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-md-8">
                            <ul className="list-group">
                                {
                                    this.state.form.map(user => (
                                        <li className="list-group-item list-group-item-action" key={user._id}>
                                            {user.UserName}
                                        </li>
                                    ))}
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProfileNew;