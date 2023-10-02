import './App.css'

import {useEffect, useState} from 'react'

export default function App(){
  const [isLoading, setIsLoading] = useState(true)
  const [imgUrl, setImgUrl] = useState(null)
  const [error, setError] = useState(null)

 

  useEffect(()=>{
    if(isLoading){
      async function fetchDatas(){
        try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random')
          if(response.ok){
          const dog = (await response.json()).message
          setImgUrl((prevState) =>([...prevState, dog]))


          setError(null)
          setIsLoading(false)
          }
          else{
            setError('no hay imagen de perrito')
          }
        }
        catch (error) {
          setError('El api no esta respondiendo')
        }
      }
      fetchDatas()
    }
  },[isLoading]);


  const randomDog = ()=>{
    setIsLoading(true)

  }

  const Imagenes = ({images}) =>{
    images.map(e=>(
      <img src={e} alt='img'></img>
    ))
  }

  if(isLoading){
    return(
      <div className='App'>
        <h1>Cargando...</h1>
      </div>
    )
  }
  if(error){
    <div className='App'>
      <h1>{error}</h1>
      <button onClick={randomDog}>Volver a intentar</button>
    </div>
  }

  return(
    <>
    <div className='App'>
      <h1>Nuevo Perrito</h1>
      <input type='text'></input>
      <button onClick={randomDog}></button>
      <br/>
      <Imagenes className='ImgPerrito' src={imgUrl} alt='imagen de perrito'></Imagenes>

    </div>
    </>
  )

  
}