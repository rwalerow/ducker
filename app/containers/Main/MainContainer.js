import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'
import { bindActionCreators } from 'redux'
import * as userActions from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired
  },
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if(user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, userData.uid)
        this.props.authUser(user.id)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if(this.props.location.pathname === '/') {
          this.context.router.replace('feed')
        }
      } else {
        this.props.removeFetching()
      }
    })
  },
  render () {
    return this.props.isFetching === true
    ? null
    : <div className={container}>
        <Navigation isAuthed={this.props.isAuthed}/>
        <div className={innerContainer}>
          { this.props.children }
        </div>
      </div>
  }
})

export default connect(
  (state) => ({isAuthed: state.isAuthed, isFetching: state.isFetching}),
  (dispatch) => (bindActionCreators(userActions, dispatch))
)(MainContainer)
