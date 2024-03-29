/* eslint-disable import/no-duplicates */
import './App.css'
// import { useState, useEffect } from 'react'
// import { getRandomFact } from './services/facts'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/say/${firstWord}?size=50&color=red&json=true`

function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  console.log('App: ' + fact)

  // Para recuperar la informacion al recargar la pagina
  /*
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))

        /* Se pude realizar con solo un useeffect si se descomenta el fetch de abajo

        const threeFirstWords = fact.split(' ', 3).join('  ')
        // const threeFirstWord = fact.split(' ').slice(0, 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
        // cometario para el segundo bloque de comentarios
  }, [])
  */

  // Para recuperar la imagen cada vez que la informacion cambie
  /*
  useEffect(() => {
    if (!fact) return // se controla si existe un fact

    const threeFirstWords = fact.split(' ', 3).join('  ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=5color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact]) */ // Se usa fact como dependencia para controlar la actualizacion de la imagen. Si hay un fact nuevo cambiará, caso contrario se mantendrá la imagen

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>Prueba Tecnica</h1>
      <h2>App de gatos</h2>
      {fact && <p>{fact}</p>} {/* renderizado condicional */}
      {imageUrl && <img src={imageUrl} alt={`Image extrated using the first three words for: ${fact}`} />}

      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}

export default App
