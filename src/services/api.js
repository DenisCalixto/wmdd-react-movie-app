import axios from 'axios'
import Show from '../classes/Show'

import { SEARCH_URL } from '../config/api_config'

export const getShows = async (category, apiUrl) => {
  const url = apiUrl.replace("{CATEGORY}",category)

  try {
    const response = await axios.get(url)
    return response.data.results.map(result => {
      return mapShow(result)
    })
  } catch (error) {
    throw error
  }
}

export const searchContent = async (category, searchText) => {
  const url = SEARCH_URL.replace("{CATEGORY}",category).replace("{SEARCH_TEXT}",searchText)

  try {
    const response = await axios.get(url)
    return response.data.results.map(result => {
      return mapShow(result)
    })
  } catch (error) {
    throw error
  }  
}

const mapShow = (result) => {
  let show = new Show()
  show.id = result.id
  show.popularity = result.popularity
  show.overview = result.overview
  show.poster = result.poster_path
  if (result.name) {
    show.title = result.name
  } else {
    show.title = result.title
  }
  if (result.first_air_date) {
    show.date = result.first_air_date
  } else {
    show.date = result.release_date
  }
  return show
}
