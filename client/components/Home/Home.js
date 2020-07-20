import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchTracksFromServer,
  favoriteTrackInServer,
  deleteTrackInServer
} from '../../reducer/tracks'
import {BsFillHeartFill} from 'react-icons/bs'
import {FaTrash} from 'react-icons/fa'
import AddTrack from '../AddTrackForm/AddTrackForm'
import './home.css'

class Home extends Component {
  constructor() {
    super()
    this.saveFavorite = this.saveFavorite.bind(this)
  }

  componentDidMount() {
    const {getTracks} = this.props
    getTracks()
    console.log('inmount')
  }

  saveFavorite(id, isFavorite) {
    this.props.favoriteTrack(id, isFavorite)
  }

  deleteTrack(id) {
    this.props.deleteTrack(id)
  }

  render() {
    if (!this.props.tracks.length) return <h1>loading</h1>

    const tracks = this.props.tracks

    return (
      <div>
        <div className="track-flex">
          <AddTrack />
          {tracks.map(track => {
            return (
              <div key={track.id} className="track-item">
                <div className="track-info">
                  <img src={track.imageURL} className="track-img" />
                  <a href={track.trackURL} className="link" target="blank">
                    {track.trackName}
                  </a>
                </div>

                <div className="track-actions">
                  <a
                    className={track.isFavorite ? 'favorite' : ''}
                    onClick={() =>
                      this.saveFavorite(track.id, track.isFavorite)
                    }
                  >
                    <BsFillHeartFill />
                  </a>

                  <a onClick={() => this.deleteTrack(track.id)}>
                    <FaTrash />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    tracks: state.tracks.tracks
  }
}

const mapDispatch = dispatch => {
  return {
    getTracks: id => dispatch(fetchTracksFromServer(id)),
    favoriteTrack: (id, isFavorite) =>
      dispatch(favoriteTrackInServer(id, isFavorite)),
    deleteTrack: id => dispatch(deleteTrackInServer(id))
  }
}

export default connect(mapState, mapDispatch)(Home)
