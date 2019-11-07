import axios from 'axios'

import { MOVIES_URL, TV_SHOWS_URL } from '../config/api_config'

export const getMovies = async (category) => {
  const url = MOVIES_URL.replace("{CATEGORY}",category)

  try {
    const response = await axios.get(url)
    //console.log(response)
    return response.data.results
  } catch (error) {
    throw error
  }
}

export const getTVShows = async (category) => {
  const url = TV_SHOWS_URL.replace("{CATEGORY}",category)
  //console.log(url)

  try {
    const response = await axios.get(url)
    //console.log(response)
    return response.data.results
  } catch (error) {
    throw error
  }
}
