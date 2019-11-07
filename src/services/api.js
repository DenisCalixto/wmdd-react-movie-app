import axios from 'axios'

import { MOVIES_URL } from '../config/api_config'

export const getMovies = async (category) => {
  const url = MOVIES_URL.replace("{CATEGORY}",category)
  //console.log(url)

  try {
    const response = await axios.get(url)
    //console.log(response)
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