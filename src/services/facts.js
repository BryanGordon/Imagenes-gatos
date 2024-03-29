import axios from 'axios'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await axios.get(CAT_ENDPOINT_RANDOM_FACT)
  const info = res.data
  console.log(info)
  const { fact } = info
  return fact
}
