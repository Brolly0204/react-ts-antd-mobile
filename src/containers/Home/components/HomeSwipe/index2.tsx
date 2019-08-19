import * as React from 'react';
import * as ReactSwipe from 'react-swipe';
import './index.less'

interface IProps {
  sliders: string[]
}

const imageStyles = {
  margin: "0 auto",
  width: "100%",
};

const swipeOptions = {
  auto: 1000,
  speed: 1000,
  disableScroll: false,
  continuous: true,
  callback() {
    console.log("slide changed");
  },
  transitionEnd() {
    console.log("ended transition");
  },
};

class HomeSwipe extends React.Component<IProps, any> {
  public render() {
    const { sliders } = this.props
    if (!sliders.length) { return null }

    return (
      <div className="home-swipe">
        <ReactSwipe
          className="carousel"
          swipeOptions={swipeOptions}
        >
          {
            sliders.map((slide, index) => (
              <div className="slide" key={index}><img style={imageStyles} src={slide} alt=""/></div>
            ))
          }
        </ReactSwipe>
      </div>
    );
  }
}

export default HomeSwipe;
