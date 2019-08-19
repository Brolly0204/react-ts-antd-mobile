import * as React from 'react'
import { connect } from 'react-redux'
import actions, { Actions } from '../store/actions/counter'
import { IStore } from '../types'

interface IReduxState {
  counter: IStore
}

interface IProps {
  number: number,
  increment: () => Actions,
  decrement: () => Actions,
  goto: () => void,
  [props: string]: any
}

interface IState {
  number: number
}

class Counter extends React.Component<IProps, IState> {
  public state = {
    number: 0,
  }

  public increment = (): void => {
    this.props.increment()
  }

  public decrement = (): void => {
    this.props.decrement()
  }

  public goto = (): void => {
    this.props.goto()
  }

  public render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.goto}></button>
      </div>
    )
  }
}

export default connect(
  (state: IReduxState): IStore => ({ ...state.counter }),
  { ...actions },
)(Counter)
