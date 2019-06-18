import React, {Component} from 'react';
import styles from './Slider.css';
import Circle from './Circle';
import { connect } from 'react-redux';

class SliderMiddle extends Component {
	render()
	{
		const bgColor = {background: this.props.color};
		return (
			<div className={styles.slider_div}>
				<div className={styles.middleMid} style={bgColor} >
					<Circle on={this.props.on} toggle={this.props.toggle} isToggling={this.props.isToggling}  stopToggling={this.props.stopToggling} colorOn={this.props.colorOn} color={this.props.color} posValue={this.props.posValue} />
				</div>
			</div>
		);
	}
};

function mapStateToProps(state){
	return {};
}

var moveAction = {type: 'move'};
function mapDispatchToProps(dispatch){
	return {
		moveIt: () => {return dispatch(moveAction);},
	};
}

var connectedSliderMiddle = connect(mapStateToProps, mapDispatchToProps)(SliderMiddle);
export default connectedSliderMiddle;
