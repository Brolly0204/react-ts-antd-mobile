import * as types from '../action-types'
import { IStore } from '../../types'
import { Actions } from '../actions/counter'

const initState: IStore = {
  number: 0,
}

export default function(state: IStore = initState, action: Actions) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      }
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
