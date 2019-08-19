import { type } from "os";
import * as types from "../action-types"
import { push } from "connected-react-router";

interface IAction {
  type: string
}

type IncrementAction = IAction

type DecrementAction = IAction

export type Actions = IncrementAction | DecrementAction

export default {
  increment(): any {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: types.INCREMENT,
        })
      }, 1000)
    }
    // return {
    //   type: types.INCREMENT,
    // }
  },
  decrement(): DecrementAction {
    return {
      type: types.DECREMENT,
    }
  },
  goto(): any {
    return push('/2')
  },
}
