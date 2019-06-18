import React, {Component} from 'react';
import Slider from './Slider';
import { connect } from 'react-redux';

class App extends Component{
	render()
	{
		return (
			<div className='gui'>
				<Slider on={this.props.good}  toggle={this.props.toggleGood}  isToggling={this.props.isToggling_good}  stopToggling={this.props.stopTogglingGood}  text='GOOD'  colorOn={this.props.colorForOnGood}  color={this.props.colorGood}  posValue={this.props.posValueGood}  />
				<Slider on={this.props.fast}  toggle={this.props.toggleFast}  isToggling={this.props.isToggling_fast}  stopToggling={this.props.stopTogglingFast}  text='FAST'  colorOn={this.props.colorForOnFast}  color={this.props.colorFast}  posValue={this.props.posValueFast}  />
				<Slider on={this.props.cheap} toggle={this.props.toggleCheap} isToggling={this.props.isToggling_cheap} stopToggling={this.props.stopTogglingCheap} text='CHEAP' colorOn={this.props.colorForOnCheap} color={this.props.colorCheap} posValue={this.props.posValueCheap} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
				good:  state.goodOn,
				fast:  state.fastOn,
				cheap: state.cheapOn,
				
				isToggling_good:  state.isTogglingGood,
				isToggling_fast:  state.isTogglingFast,
				isToggling_cheap: state.isTogglingCheap,
				
				colorGood:  state.colorGood,
				colorFast:  state.colorFast,
				colorCheap: state.colorCheap,
				
				colorForOnGood:  state.colorForOnGood,
				colorForOnFast:  state.colorForOnFast,
				colorForOnCheap: state.colorForOnCheap,
				
				posValueGood:  state.posValueGood,
				posValueFast:  state.posValueFast,
				posValueCheap: state.posValueCheap,
		   };
}

var toggleGoodAction  = {type: 'toggleGood' };
var toggleFastAction  = {type: 'toggleFast' };
var toggleCheapAction = {type: 'toggleCheap'};

var stopTogglingGoodAction = {type: 'stopTogglingGood'};
var stopTogglingFastAction = {type: 'stopTogglingFast'};
var stopTogglingCheapAction = {type: 'stopTogglingCheap'};

function mapDispatchToProps(dispatch){
	return {
		toggleGood:  () => {return dispatch(toggleGoodAction);},
		toggleFast:  () => {return dispatch(toggleFastAction);},
		toggleCheap: () => {return dispatch(toggleCheapAction);},
		
		stopTogglingGood: () => {return dispatch(stopTogglingGoodAction);},
		stopTogglingFast: () => {return dispatch(stopTogglingFastAction);},
		stopTogglingCheap: () => {return dispatch(stopTogglingCheapAction);},
	};
}

var connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;


