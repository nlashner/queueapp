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
    } catch (err) {
      console.error(err.message)
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
