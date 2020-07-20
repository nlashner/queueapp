import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTrackToServer} from '../../reducer/tracks'

class AddTrack extends Component {
  constructor() {
    super()
    this.state = {
      trackName: '',
      trackURL: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {addTrack} = this.props
    const userId = this.props.user.id
    const {trackName, trackURL} = this.state
    const track = {trackName, trackURL, userId}
    console.log('track in form', track)

    await addTrack(track)

    this.setState({
      trackName: '',
      trackURL: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Track Name:</label>
        <input
          type="text"
          name="trackName"
          value={this.state.trackName}
          onChange={this.handleChange}
        />
        <label>Track URL:</label>
        <input
          type="text"
          name="trackURL"
          value={this.state.trackURL}
          onChange={this.handleChange}
        />
        <button type="submit">submit</button>
      </form>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    addTrack: track => dispatch(addTrackToServer(track))
  }
}

export default connect(mapState, mapDispatch)(AddTrack)
