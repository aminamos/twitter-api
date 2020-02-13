import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTweet } from '../../actions/index'

class TweetInput extends Component {
  state = {
    inputText: ''
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let tweetText = this.state.inputText
    this.props.postTweet(tweetText)
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
            <label>Post tweet</label>
            <input
              type="text"
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
    postTweet: (text) => dispatch(postTweet(text))
  }
}

export default connect(null, mapDispatchToProps)(TweetInput)