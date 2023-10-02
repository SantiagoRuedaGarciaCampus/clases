import './App.css'
import Read from './components/read'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Update from './components/update'
import create from './components/create'

export default function App(){
    return(
        <Router>
            <div className='main'>
                <h2>Trabajo de manejo de apis</h2>
                <div style={{marginTop:20}}>
                    <Route exat path='/read' component={Read}></Route>
                </div>
            </div>
            <div>
                <Route path='/update' component={Update} ></Route>
            </div>
            <div>
                <Route exat path='/create' component={create}></Route>
            </div>
        </Router>

    )
}