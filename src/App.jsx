import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  console.log('App: ' + fact)

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>Prueba Tecnica</h1>
      <h2>App de gatos</h2>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extrated using the first three words for: ${fact}`} />}

      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}

export default App
