import './App.css'

import {useEffect, useState} from 'react'

export default function App(){
  const [isLoading, setIsLoading] = useState(true)
  const [imgUrl, setImgUrl] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    if(isLoading){
      async function fetchData(){
        try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random')
          if(response.ok){
          const dog = await response.json()
          setImgUrl(dog.message)
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
      fetchData()
    }
  },[isLoading]);

  const randomDog = ()=>{
    setIsLoading(true)
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
      <button className='BtnPerrito' onClick={randomDog}>Otro perrito</button>
      <br/>
      <img className='ImgPerrito' src={imgUrl} alt='imagen de perrito'></img>
    </div>
    </>
  )

  
}