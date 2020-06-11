import axios from 'axios'

const GET_TRACKS = 'GET_TRACKS'

const getTracks = tracks => {
  return {
    type: GET_TRACKS,
    tracks
  }
}

export const fetchTracksFromServer = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/tracks')
      dispatch(getTracks(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const favoriteTrackInServer = (id, isFavorite) => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/tracks', {id, isFavorite})
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  tracks: []
}

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.tracks
      }
    default:
      return state
  }
}
