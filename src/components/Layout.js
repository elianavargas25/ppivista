  
import React from 'react'

import NavBar from './NavBarComponent'
//import NavBarMenu from './NavBarMenu'

const Layout = (props) =>{
    return (
        <React.Fragment>
            <NavBar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;