import React from 'react';
import logoPoli from '../images/logo.png';
import '../styles/ProfileStyles.css'

class Profile extends React.Component {
    render(){
                
        return(
            <div className="Profile">
                <div className="pr">
                    <br></br>
                    <br></br>
                    <br></br>
                    <img className="Profile__logo" src={logoPoli} alt="Logo del Poli" />
                </div>
                
                
                
            </div>
        )
    }
}

export default Profile;