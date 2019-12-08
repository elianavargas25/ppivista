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
        axios.get('http://localhost:3000/api/sesion/?', this.props.formValues)
            .then(profiles => alert('log in successfully'))
            .catch(err => alert(err))
    };

    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>

                <div className="container">
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Login</h3>
						</div>
						<div className="panel-body">
							<form accept-charset="UTF-8" role="form" onSubmit={this.handleSubmit}>
								<fieldset>
									<div className="form-group">
                                        <input 
                                        onChange={this.props.onChange}
                                        className="form-control" 
                                        placeholder="userName" 
                                        name="email" 
                                        type="text" />
									</div>
									<div className="form-group">
                                        <input 
                                        onChange={this.props.onChange}
                                        className="form-control" 
                                        placeholder="Password" 
                                        name="password" 
                                        type="password" 
                                        value="text" />
									</div>
									<div className="checkbox">
										<label>
                                            <input name="remember" 
                                            type="checkbox" 
                                            value="Remember Me" /> 
                                            Recuerdame</label>
									</div>
                                    <input 
                                    onClick={this.handleClick}
                                    className="btn btn-lg btn-success btn-block" 
                                    type="submit" 
                                    value="Login" />
								</fieldset>
							</form>
							<hr />
						</div>
					</div>
				</div>
			</div>
		</div>
                
            </React.Fragment>
        )
    }
}

export default ProfileFormComponent;