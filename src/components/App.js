import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './Layout';
import Menu from '../pages/Menu';
import ProfileNew from '../pages/ProfileNew';
import Profiles from '../pages/Profiles';
import NotFound from '../pages/NotFound';
import IngresosNew from '../pages/ProfileIngresos';
import EgresosNew from '../pages/ProfileEgresos';
import graficas from '../Graficas/Graficasingresos1';
import contrasenas from '../pages/ProfileCambioContrasena';
import Login from '../pages/login';
import table from '../components/table';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/profiles/new" component={ProfileNew} />
                    <Route exact path="/ingresos/new" component={IngresosNew} />
                    <Route exact path="/egresos/new" component={EgresosNew} />
                    <Route exact path="/graficas/new" component={graficas} />
                    <Route exact path="/cambiarcontrasena/new" component={contrasenas} />
                    <Route exact path="/table" component={table}/>

                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;