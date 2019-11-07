import axios from 'axios'

import { API_KEY, BASE_URL, MOVIES_URL } from '../config/api_config'

export const getMovies = async (category) => {
  const url = BASE_URL

  try {
    const response = await axios.get(MOVIES_URL)
    console.log(response)
    return response.data.results
  } catch (error) {
    throw error
  }
}

// export const getRecipe = async (title) => {
//   const url = BASE_URL
//   try {
//     const response = await axios.get(url, {
//       params: {
//         key: API_KEY,
//         q: title
//       }
//     })
//     console.log(response)
//     return response.data.recipes[0]
//   } catch (error) {
//     throw error
//   }
// }