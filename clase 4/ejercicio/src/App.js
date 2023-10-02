import React, {Fragment} from "react"

import Empleados from './components/Empleados'
import Productos from './components/Productos'
import Sedes from './components/Sedes'
import Home from './components/Home'

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>
                Pagina Principal
              </Link>
            </li>
            <li>
              <Link to='/productos'>
                Productos
              </Link>
            </li>
            <li>
              <Link to='/sedes'>
                Sedes
              </Link>
            </li>
            <li>
              <Link to='/empleados'>
                Empleados
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          </Switch>
      </Router>
      <footer> Hola soy un pie de pagina</footer>
    </Fragment>
  )
}

