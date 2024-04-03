import axios from 'axios'
import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join('  ')
    axios.get(`https://cataas.com/cat/says/${threeFirstWords}?size=5color=red&json=true`)
      .then(info => info.data)
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
