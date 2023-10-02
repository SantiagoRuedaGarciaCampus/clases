import { useState } from 'react';

export default function AgregarElemento(){
  const [tarea, setTarea] = useState('')
  const [valors, setTareas] = useState([])
  var id = 0
  const [tareas] = useState([valors])

  return(
    <>
      <h1>
        Tareas
      </h1>
     <input placeholder='nueva tarea'
      onChange={e =>{
        setTarea(e.target.value)
      }}/>
      <button onClick={
        ()=>{
          tareas.push({
            id: id++,
            name: tarea,
          })
        }
      }>Submit</button>
      <ul>
        {tareas.map(tareas =>(
          <>
          <li key={tareas.id}>{tareas.name}{''}</li>
          <button onClick={()=>{
            setTareas(
              tareas.filter(a =>
              a.id !== tareas.id
            ))
            console.log('eliminado');
          }
          }>Eliminar</button>
          </> 
          ))}
      </ul>
    </>
  )
}


/* function deleteTarea() {
  
} */


















/* 
<button onClick={()=>{
    setTareas(
      tareas.filter(a =>
        a.id !== tareas.id,
      tareas.map()
    ))
    console.log('eliminado');
  }
}>Eliminar</button>

<button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id,
                  console.log('eliminado')
    );
  }
}>Eliminar</button> */