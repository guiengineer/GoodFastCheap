import React, {Component} from 'react';
import styles from './Slider.css';
import x from './SliderPresentational';
import SliderMiddle from './SliderMiddle';

class Slider extends Component{
	render()
	{
		return (
			<div className={styles.slider}>
				<x.SliderLeft bgColor={this.props.color} />
				<SliderMiddle on={this.props.on} toggle={this.props.toggle} isToggling={this.props.isToggling} stopToggling={this.props.stopToggling} colorOn={this.props.colorOn} color={this.props.color} posValue={this.props.posValue} />
				<x.SliderRight bgColor={this.props.color}/>
				<x.SliderLabel fgColor='grey' text={this.props.text}/>
			</div>
		)
	}
}

export default Slider;
