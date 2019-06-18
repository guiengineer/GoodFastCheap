import React, {Component} from 'react';
import styles from './Slider.css';
import { connect } from 'react-redux';

class Circle extends Component {
	constructor(props)
	{
		super(props);
		this.leftOffset = -26;
		this.move 		= this.move.bind(this);
		this.onclick 	= this.onclick.bind(this);
	}
	
	shouldComponentUpdate(nextProps, nextState)
	{
		return this.props.isToggling===true;
	}
	
	onclick()
	{
		this.props.toggle();
		setTimeout(this.move, 2);
	}
	
	move()
	{
		if(this.props.pos<128)
		{
			this.props.moveIt();
			setTimeout(this.move, 2);
		}
		else
		{
			this.props.stopToggling();
		}
	}
	
	render()
	{
		const 	lef = this.leftOffset + this.props.posValue;
		const 	clr = {backgroundColor: this.props.color, left: lef+'px' };
		//console.log('render: '+this.props.colorOn+', pos:'+this.props.pos+', posVal:'+this.props.posValue+'px, '+this.props.color);
		return(<div className={styles.circle}  style={clr} onClick={this.onclick}/>);
	}
}

function mapStateToProps(state){return {pos: state.pos};}
var moveAction = {type: 'move'};

function mapDispatchToProps(dispatch){return {moveIt: () => {return dispatch(moveAction);}};}
var connectedCircle = connect(mapStateToProps, mapDispatchToProps)(Circle);
export default connectedCircle;
