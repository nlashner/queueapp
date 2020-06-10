import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTracksFromServer} from '../../reducer/tracks'

class Home extends Component {
  componentDidMount() {
    const {user, getTracks} = this.props
    getTracks(user.id)
  }

  render() {
    if (!this.props.tracks.length) return <h1>loading</h1>

    const tracks = this.props.tracks
    console.log(tracks)

    return (
      <div>
        {tracks.map(track => {
          return (
            <div key={track.id}>
              <p>{track.trackName}</p>
            </div>
          )
        })}
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
    getTracks: id => dispatch(fetchTracksFromServer(id))
  }
}

export default connect(mapState, mapDispatch)(Home)
