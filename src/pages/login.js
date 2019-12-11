import React from 'react';
import { Link } from 'react-router-dom';

//import '../styles/Login';
const Login = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Login</h3>
						</div>
						<div className="panel-body">
							<form accept-charset="UTF-8" role="form">
								<fieldset>
									<div className="form-group">
										<input className="form-control" 
										placeholder="UserName" 
										name="email"
										 type="text" 
										 
										 />
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Password" name="password" type="password" />
									</div>
									<div className="checkbox">
										<label>
											<input name="remember" type="checkbox" value="Remember Me" /> Recuerdame</label>
									</div>
									<Link className="btn btn-lg btn-success btn-block" type="submit" value="Login" to="/Menu">Login</Link>
								</fieldset>
							</form>
							<hr />
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}
export default Login;