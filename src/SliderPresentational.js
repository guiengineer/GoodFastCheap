import React from 'react';
import styles from './Slider.css';

const SliderLeft = ({bgColor}) => {
	const bkColor = {background: bgColor};
	return (
	<div className={styles.slider_div}>
		<div className={styles.left} style={bkColor} />
	</div>
	);
};

const SliderRight = ({bgColor}) => { 
	const bkColor = {background: bgColor};
	return (
	<div className={styles.slider_div}>
		<div className={styles.right} style={bkColor} />
	</div>
	);
};

const SliderLabel = ({fgColor, text}) => { 
	const textColor = {color: fgColor};
	return (
		<div className={styles.label} style={textColor}>{text}</div>
	);
};

export default {SliderLeft, SliderRight, SliderLabel};
