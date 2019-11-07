import axios from 'axios'

import { API_KEY, BASE_URL } from '../config/api_config'

export const getMovies = async (recipeName) => {
  const url = BASE_URL

  try {
    const response = await axios.get(url, {
      params: {
        key: API_KEY,
        q: recipeName
      }
    })
    console.log(response)
    return response.data.recipes
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