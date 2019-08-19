import * as types from '../action-types'
import { IHome } from '../../types'
import { IAction } from '../actions/home'

const initState: IHome = {
  category: 'node',
  sliders: [],
}

export default function(state: IHome = initState, action: IAction) {
  switch (action.type) {
    case types.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      }
    case types.SET_HOME_SLIDERS:
      return {
        ...state,
        sliders: action.sliders,
      }
    default:
      return state
  }
}
