import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


//Slide images must be a minimum size
class Carousel extends React.Component {
	constructor(props) {
		super(props);

		var slides = {
			obj: [],
			ele: []
		}
		for (var i = 0; i<props.slides.numOfSlides; i++) {
			slides.obj[i] = React.createRef();
		}

		this.state = {
			customCSS: props.customCSS,
			slideImages: props.slides,
			slideInView: -1,
			slides: slides,
			slideStyles: {
				initial: {
					width: "100vw",
					height: "35vh",
					position: "relative",
					backgroundAttachment: "local",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					zIndex: 1
				},
				transition: {
					transition: "transform linear 1s"
				},
				moveLeft: {
					transform: "translateX(-100vw)"
				},
				moveRight: {
					transform: "translateX(100vw)"
				},
				reset: {
					transition: "none",
					transform: "translateX(-200vw)"
				}
			}
		};

	}

	nextSlide = (previousSlide) => {
		//if previousSlide is not the last slide
		//To init, set previousSlide to > slideImages.numOfSlides or < 0
		if ( (previousSlide < (this.state.slideImages.numOfSlides-1)) &&
			(previousSlide > -1) ) {
			return (previousSlide + 1);
		}
		else if (this.state.slideImages.numOfSlides < 0) {
			return -1;
		}
		else {
			return 0;
		}
	};

	lastSlide = (previousSlide) => {
		//if previousSlide is not the first slide
		//To init, set previousSlide to > slideImages.numOfSlides or < 0
		if ( (previousSlide < (this.state.slideImages.numOfSlides-1)) &&
			(previousSlide > -1) ) {
			return (previousSlide - 1);
		}
		else if (this.state.slideImages.numOfSlides > (this.state.slideImages.numOfSlides-1)) {
			return -1;
		}
		else {
			return (this.state.slideImages.numOfSlides-1);
		}
	};

	changeSlide = (slideInView, direction) => {
		if (direction == "left") {
			//push slideInView to the left
			//push nextSlide from the left, left
		}
		else if (direction == "right") {

		}
	};

	handleButtonClick = (buttonID, slides, slideInView) => {
		if (buttonID == 1) {
			
		}
		else if (buttonID == 2) {
			
		}
	};

	handleRightButtonClick = () => {
		this.handleButtonClick(2, this.state.slides, this.state.slideInView)
	};

	initSlides = () => {

		var ele = this.state.slides.ele;
		var obj = this.state.slides.obj;
		for (var i = 0; i<this.state.slideImages.numOfSlides; i++) {

			let yOffset = (35*i - 70) + "vh";
			let slideImage = {backgroundImage: `url(${this.state.slideImages.slides[i][0]})`};
			alert(slideImage.backgroundImage);
			if (i===0) {
				ele[i] = <div 
						ref={r => obj[i] = r} 
						style={{...slideImage, 
							...this.state.slideStyles.initial,
							...this.state.slideStyles.transition,
							...this.state.slideStyles.moveRight,
							...{top: yOffset}, 
							...{backgroundColor:"black"}}}>
					</div>;
			}
			else {
				ele[i] = <div 
						ref={r => obj[i] = r} 
						style={{...slideImage, 
							...this.state.slideStyles.initial,
							...this.state.slideStyles.transition,
							...this.state.slideStyles.moveLeft,
							...{top: yOffset}}}>
					</div>;
			}
		}

		this.setState({
			...this.state,
			slides: {
				obj,
				ele
			},
			slideInView: 0
		});
	};

	componentDidMount() {
		this.initSlides();
	}

	render() {
		
		let buttonStyle = {
			width: "25vw",
			height: "35vh",
			position: "relative",
			backgroundColor: "black",
			opacity: .5,
			zIndex: 2
		};
		let rightButton = {
			left: "75vw", 
			top: "-35vh"
		};
		let buttons = <div>
			<div style={{...buttonStyle}} 
				onClick={{}}></div>
			<div style={{...buttonStyle, ...rightButton}}
				onClick={this.handleRightButtonClick}></div>
		</div>;

		var slides = this.state.slides.obj;

		return(
			<div style={{ 
				display:"block",
				position: "relative",
				width:"100vw",
				height:"35vh",
				minWidth:"200px",
				minHeight:"100px",
				...this.state.customCSS
			}}>
			{buttons}
			{slides.map(r => r.current)}
			</div>

		);
	}
}

Carousel.propTypes = {
	//customCSS for positioning, etc.
	customCSS: PropTypes.shape({}),
	slides: PropTypes.shape({})
}

export default Carousel;