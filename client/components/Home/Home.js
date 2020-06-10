import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTracksFromServer} from '../../reducer/tracks'

class Home extends Component {
  componentDidMount() {
    const {user, getTracks} = this.props
    getTracks(user.id)
  }

  render() {
    console.log('user', this.props.user)
    return (
      <div>
        <h1> hi </h1>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    tracks: state.tracks
  }
}

const mapDispatch = dispatch => {
  return {
    getTracks: id => dispatch(fetchTracksFromServer(id))
  }
}

export default connect(mapState, mapDispatch)(Home)
