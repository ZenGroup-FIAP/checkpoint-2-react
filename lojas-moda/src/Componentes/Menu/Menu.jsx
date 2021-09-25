import React from 'react'
import ModaMasculina from "../ModaMasculina/ModaMasculina"
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import ModaFeminina from '../ModaFeminina/ModaFeminina'
import ModaInfantil from '../ModaInfantil/ModaInfantil'
import Sobre from '../Sobre/Sobre'

export default function Menu() {
    return (
        <>
            <header style={{backgroundColor: 'black'}}>
                <div className="logo-img">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="305" height="63" viewBox="0 0 305 63">
                            <text id="ZenModas" transform="translate(0 48)" fill="#fff" font-size="60" font-family="JosefinSans-Bold, Josefin Sans" font-weight="700"><tspan x="0" y="0">ZenModas</tspan></text>
                        </svg>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/masculino">Masculino</Link></li>
                        <li><Link to="/feminino">Feminino</Link></li>
                        <li><Link to="/infantil">Infantil</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </header>

            <section>
                <Switch>
                    
                    <Route path="/masculino">
                        <ModaMasculina />
                    </Route>
                    <Route path="/feminino">
                        <ModaFeminina />
                    </Route>
                    <Route path="/infantil">
                        <ModaInfantil />
                    </Route>
                    <Route path="/sobre">
                        <Sobre />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    
                </Switch>
            </section>
        </>
    )
}
