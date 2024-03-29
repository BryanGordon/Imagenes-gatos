import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

// Uso de custom hook para obtener datos aleatorios

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
