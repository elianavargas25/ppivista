import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBarComponent copy'
import che from '../images/che.png'
import logo from '../images/logo.png'
import '../styles/Home.css'

function Home() {
	return (
		<div className="Home">
			<dir className="col-text">
				<img src={logo} alt="Poli conf logo" />
				<NavBar />
				<span>
					<h1>CONFERENCIA <br /> POLI ASAMBLEA <br /> #SomosPoli</h1>
				</span>
			</dir>
			<dir className="col-img">
				<img src={che} alt="Che Guevara" />
			</dir>
		</div>
	)
}

export default Home