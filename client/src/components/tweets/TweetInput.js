import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTweet } from '../../actions/index'

class TweetInput extends Component {
  state = {
    text: '',
    loading: false
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.postTweet(this.state)
    document.getElementById('text-box').value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
            <label>Post tweet</label>
            <input
              type="text"
              id="text-box"
              onChange={event => this.handleChange(event)}
              value={this.state.inputText}
            />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postTweet: (stateObject) => dispatch(postTweet(stateObject))
  }
}

export default connect(null, mapDispatchToProps)(TweetInput)