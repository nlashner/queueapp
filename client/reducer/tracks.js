import axios from 'axios'

const GET_TRACKS = 'GET_TRACKS'
const FAVORITE_TRACK = 'FAVORITE_TRACK'

const getTracks = tracks => {
  return {
    type: GET_TRACKS,
    tracks
  }
}

const favoriteTrack = track => {
  return {
    type: FAVORITE_TRACK,
    track
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
      dispatch(favoriteTrack(data))
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
    case FAVORITE_TRACK: {
      let trackList = state.tracks
      let idx = trackList.findIndex(obj => obj.id === action.track.id)
      trackList[idx] = action.track
      console.log(trackList)
      return {
        ...state,
        tracks: trackList
      }
    }
    default:
      return state
  }
}
