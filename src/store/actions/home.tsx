import * as types from '../action-types'
import { getSliders } from '../../api/home'

export interface IAction {
  type: string,
  category?: string,
  sliders?: string[]
}

export default {
  setCategory(category): IAction {
    return {
      category,
      type: types.SET_CATEGORY,
    }
  },
  getSliders() {
    return (dispatch) => {
      getSliders().then((result) => {
        const { code, data } = result
        if (code === 0) {
          dispatch({
            sliders: data,
            type: types.SET_HOME_SLIDERS,
          })
        }
      })
    }
  },
}
