import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Feed } from 'components'
import * as feedActions from 'redux/modules/feed'

const FeedContainer = React.createClass({
  propTypes: {
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setAndHandleFeedListener: PropTypes.func.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired
  },
  componentDidMount() {

  },
  render () {
    return (
      <Feed
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable} />
    )
  }
})

function mapStateToProps ({ feed }) {
  const { newDucksAvailable, error, isFetching } = feed
  return {
    newDucksAvailable,
    error,
    isFetching
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(feedActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer)
