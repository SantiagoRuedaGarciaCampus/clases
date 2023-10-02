import React, {Fragment} from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";


import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";


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
              <Link to='/gallery'>
                Galeria
              </Link>
            </li>
            <li>
              <Link to='/about'>
                Acerca de
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


export default App;
