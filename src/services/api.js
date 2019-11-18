import axios from 'axios'
import Show from '../classes/Show'

import { MOVIES_URL, TV_SHOWS_URL, SEARCH_URL } from '../config/api_config'

export const getMovies = async (category) => {
  const url = MOVIES_URL.replace("{CATEGORY}",category)
  // console.log(url)

  try {
    const response = await axios.get(url)
    // console.log(response)
    return response.data.results.map(result => {
      return new Show(
        result.id,
        result.title,
        result.release_date,
        result.popularity,
        result.overview,
        result.poster_path
      )
    })
    //return response.data.results
  } catch (error) {
    throw error
  }
}

export const getTVShows = async (category) => {
  const url = TV_SHOWS_URL.replace("{CATEGORY}",category)
  // console.log(url)

  try {
    const response = await axios.get(url)
    //console.log(response)
    return response.data.results.map(result => {
      return new Show(
        result.id,
        result.name,
        result.first_air_date,
        result.popularity,
        result.overview,
        result.poster_path
      )
    })
    //return response.data.results
  } catch (error) {
    throw error
  }
}

export const searchContent = async (category, searchText) => {
  const url = SEARCH_URL.replace("{CATEGORY}",category).replace("{SEARCH_TEXT}",searchText)
  // console.log(url)

  try {
    const response = await axios.get(url)
    //console.log(response)
    return response.data.results.map(result => {
      return new Show(
        result.id,
        result.title,
        result.release_date,
        result.popularity,
        result.overview,
        result.poster_path
      )
    })
    //return response.data.results
  } catch (error) {
    throw error
  }
}
