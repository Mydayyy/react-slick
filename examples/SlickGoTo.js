import React, { Component } from 'react'
import Slider from '../src/slider'
import { baseUrl } from './config'

export default class SlickGoTo extends Component {
  constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    const dontAnimateCheckbox = this.refs.dontAnimateCheckbox;
    const slider = this.refs.slider;

    slider.slickGoTo(parseInt(e.target.value), dontAnimateCheckbox.checked)
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...this.props
    };
    return (
      <div>
        <h2>Slick Go To</h2>
        <div><input type='checkbox' ref='dontAnimateCheckbox' /> Disable animation</div>
        <input onChange={this.changeHandler} defaultValue={0} type='range' min={0} max={3} />
        <Slider ref='slider' {...settings}>
          <div><img src={baseUrl + '/abstract01.jpg'} /></div>
          <div><img src={baseUrl + '/abstract02.jpg'} /></div>
          <div><img src={baseUrl + '/abstract03.jpg'} /></div>
          <div><img src={baseUrl + '/abstract04.jpg'} /></div>
        </Slider>
      </div>
    );
  }
}
