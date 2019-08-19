import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import history from '../../store/history'
import './index.less'

interface TabProps extends RouteComponentProps<any> {
}

class Tab extends React.Component<TabProps> {
  public state = {
    selectedTab: this.props.location.pathname || '/',
  }
  public render() {
    return (
      <nav className="footer">
        <TabBar
          unselectedTintColor="#666"
          tintColor="#188ae4"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={
              <i className="iconfont icon-xingqiu"></i>
            }
            selectedIcon={
              <i className="iconfont icon-xingqiu active"></i>
            }
            selected={this.state.selectedTab === '/'}
            onPress={() => {
              history.push('/')
              this.setState({
                selectedTab: '/',
              })
            }}
          >
          </TabBar.Item>

          <TabBar.Item
            title="我的课程"
            key="Mime"
            icon={
              <i className="iconfont icon-react"></i>
            }
            selectedIcon={
              <i className="iconfont icon-react active"></i>
            }
            selected={this.state.selectedTab === '/mime'}
            onPress={() => {
              history.push('/mime')
              this.setState({
                selectedTab: '/mime',
              })
            }}
          >
          </TabBar.Item>

          <TabBar.Item
            title="个人中心"
            key="Profile"
            icon={
              <i className="iconfont icon-xiaolian"></i>
            }
            selectedIcon={
              <i className="iconfont icon-xiaolian active"></i>
            }
            selected={this.state.selectedTab === '/profile'}
            onPress={() => {
              history.push('/profile')
              this.setState({
                selectedTab: '/profile',
              })
            }}
          >
          </TabBar.Item>
        </TabBar>
      </nav>
    )
  }
}

export default withRouter(Tab)

// export default class Tab extends React.Component {
//   public render() {
//     return (
//       <nav className="footer">
//         <NavLink exact to="/" activeClassName="active">
//           <i className="iconfont icon-xingqiu"></i>
//           <span>首页</span>
//         </NavLink>
//         <NavLink exact to="/mime">
//           <i className="iconfont icon-react"></i>
//           <span>我的课程</span>
//         </NavLink>
//         <NavLink exact to="/profile">
//           <i className="iconfont icon-xiaolian"></i>
//           <span>个人中心</span>
//         </NavLink>
//       </nav>
//     )
//   }
// }
