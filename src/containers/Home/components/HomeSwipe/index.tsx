import * as React from 'react'
import { Carousel } from 'antd-mobile';

interface IProps {
  sliders: string[]
}
export default class HomeSwipe extends React.Component<IProps, any> {
  public state = {
    imgHeight: 176,
  }
  public render() {
    const { sliders } = this.props
    return (
      <Carousel
        autoplay={true}
        autoplayInterval={3000}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
        style={{touchAction: "none"}}
      >
        {
          sliders.map((slider, index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                onClick={(e) => e.preventDefault()}
                src={slider}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))
        }
      </Carousel>
    )
  }
}
