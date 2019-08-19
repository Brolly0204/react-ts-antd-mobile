import * as React from 'react';
import { Menu, NavBar, Icon } from 'antd-mobile'
import { IAction } from '../../../../store/actions/home'
import { CSSTransition, TransitionGroup } from "react-transition-group"

import './index.less'

interface IProps {
  category: string,
  setCategory: (category: string) => IAction,
  [props: string]: any
}

const data = [
  {
    value: 'node',
    label: 'node课程',
  }, {
    value: 'react',
    label: 'react课程',
  },
  {
    value: 'vue',
    label: 'vue课程',
    isLeaf: true,
  },
]

interface IState {
  show: boolean,
  initData: any
}

class HomeHeader extends React.Component<IProps, IState> {
  public state: IState = {
    show: false,
    initData: '',
  }

  public onChange = (value): void => {
    this.props.setCategory(value[0])
  }

  public handleClick = (e): void => {
    e.preventDefault()
    this.setState({
      show: !this.state.show,
    })
    if (!this.state.initData) {
      this.setState({
        initData: data,
      });
    }
  }

  public onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  public render() {
    const { show, initData } = this.state
    const { category } = this.props
    const menuEl = (
      <Menu
        className="menu"
        data={this.state.initData}
        level={1}
        value={[category]}
        height={44 * this.state.initData.length}
        onChange={this.onChange}
      />
    )

    return (
      <div className = "home-menu" >
        <NavBar
          className='navbar'
          mode="dark"
          leftContent={
            <i className="iconfont icon-git" />
          }
          rightContent={
            <Icon onClick={this.handleClick} key="1" type="ellipsis" />
          }
        >
          Brolly
        </NavBar>
        <TransitionGroup>
          {
            show && initData ? (
              <CSSTransition in={show && !!initData} classNames="fade" timeout={500}>
                {menuEl}
              </CSSTransition>
            )
              : null
          }
        </TransitionGroup>
    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div >
    );
  }
}

export default HomeHeader;
