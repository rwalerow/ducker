import { Modal } from 'components'
import { connect } from 'react-redux'
import * as modalActions from 'redux/modules/modal'
import { bindActionCreators } from 'redux'

function mapStateToProps({modal, users}) {
  const duckTextLength = modal.duckText.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(modalActions, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Modal)
