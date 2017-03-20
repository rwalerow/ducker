import { saveDuck } from 'helpers/api'
import { closeModal } from './modal'
import { addSingleUserDuck } from './usersDucks'

const FETCHING_DUCK = 'FETCHING_DUCK'
const FETCHING_DUCK_ERROR = 'FETCHING_DUCK_ERROR'
const FETCHING_DUCK_SUCCESS = 'FETCHING_DUCK_SUCCESS'
const REMOVE_FETCHING = 'REMOVE_FETCHING'
const ADD_DUCK = 'ADD_DUCK'
const ADD_MULTIPLE_DUCKS = 'ADD_MULTIPLE_DUCKS'

export function duckFanout (duck) {
  return function(dispatch, getState) {
    const uid = getState().users.authedId
    saveDuck(duck)
      .then((duckWithId) => {
        dispatch(addDuck(duckWithId))
        dispatch(closeModal())
        dispatch(addSingleUserDuck(uid, duckWithId.duckId))
      })
      .catch((err) => {
        console.warn('Error in duckFanout', err)
      })
  }
}

function fetchingDuck() {
  return {
  	type: FETCHING_DUCK
  }
}

function fetchingDuckError(error) {
  return {
  	type: FETCHING_DUCK_ERROR,
  	error: "Errro fetching duck"
  }
}

function fetchingDuckSuccess(duck) {
  return {
	type: FETCHING_DUCK_SUCCESS,
  	duck
  }
}

function removeFetching() {
  return {
  	type: REMOVE_FETCHING
  }
}

function addDuck(duck) {
  return {
  	type: ADD_DUCK,
  	duck
  }
}

function addMultipleDucks(ducks) {
  return {
	type: ADD_MULTIPLE_DUCKS,
  	ducks
  }
}

const ducksInitialState = {
	isFetching: true,
	error: ''
}

export default function ducks(state = ducksInitialState, action) {
	switch(action.type) {
		case FETCHING_DUCK:
			return {
				...state,
				isFetching: true
			}
		case FETCHING_DUCK_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case ADD_DUCK:
		case FETCHING_DUCK_SUCCESS:
			return {
				...state,
				error: '',
				isFetching: false,
				[action.duck.duckId]: action.duck
			}
		case REMOVE_FETCHING:
			return {
				...state,
				isFetching: false,
				error: ''
			}
		case ADD_MULTIPLE_DUCKS:
			return {
				...state,
				...action.ducks
			}
		default:
			return state
	}
}
