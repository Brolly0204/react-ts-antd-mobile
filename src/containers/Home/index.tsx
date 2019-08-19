import * as React from 'react'
import { connect } from 'react-redux'
import HomeHeader from './components/HomeHeader'
import HomeSwipe from './components/HomeSwipe'
import { IHome } from '../../types'
import actions, { IAction } from '../../store/actions/home'
import './index.less'

interface IHomeState {
  home: IHome
}

interface IProps {
  category: string,
  setCategory: (category: string) => IAction,
  sliders: string[],
  [props: string]: any
}

class Home extends React.Component<IProps, IHomeState> {
  public componentDidMount() {
    this.props.getSliders()
  }
  public render() {
    const { category, setCategory, sliders } = this.props
    return (
      <React.Fragment>
        <HomeHeader
          category={category}
          setCategory={setCategory}
        />
        <div className="home-content">
          <HomeSwipe sliders={sliders} />
          Home
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  (state: IHomeState) => ({ ...state.home }),
  { ...actions },
)(Home);
