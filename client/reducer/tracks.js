import axios from 'axios'

const GET_TRACKS = 'GET_TRACKS'
const FAVORITE_TRACK = 'FAVORITE_TRACK'
const DELETE_TRACK = 'DELETE_TRACK'

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

const deleteTrack = id => {
  return {
    type: DELETE_TRACK,
    id
  }
}

export const fetchTracksFromServer = () => {
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

export const deleteTrackInServer = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/tracks/${id}`)
      dispatch(deleteTrack(id))
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
      return {
        ...state,
        tracks: [...trackList]
      }
    }
    case DELETE_TRACK: {
      const oldTracks = [...state.tracks]
      const newTracks = oldTracks.filter(track => track.id !== action.id)
      return {
        ...state,
        tracks: [...newTracks]
      }
    }
    default:
      return state
  }
}
