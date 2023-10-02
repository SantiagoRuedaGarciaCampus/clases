import {useState} from 'react'



function App(){
  const [valors, setTareas] = useState([])

  var id = 0

  const [tarea, setTarea] = useState('')
  const [tareas] = useState([valors])

  return(
    //cuerpo
    <>
    <h1>
        Tareas
      </h1>
     <input onChange={
      //crear o subir nuevo 
      e =>{
        setTarea(e.target.value)
      }
     } placeholder='nueva tarea'/>
     <button onClick={
        ()=>{
          tareas.push({
            id: id++,
            name: tarea,
          })
        }
      }>Submit</button>
    </>
  )

  
}





export default App;

/* import React, {useState} from 'react'
import ChildComponent from '/ChildComponent'

function ParentComponent(){
  const [valor, setValor] = useState(0)

  return(
    <>
    <div>
      <h1>
        Valor del componente padre: {valor}
      </h1>
      <ChildComponent valor={ca}></ChildComponent>
    </div>
    </>
  )
}

export default ParentComponent */