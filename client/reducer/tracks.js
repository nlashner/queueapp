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
      console.log(data)
      dispatch(getTracks(data))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export default function tracksReducer(state = [], action) {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...action.tracks
      }
    default:
      return state
  }
}
