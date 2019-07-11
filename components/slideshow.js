import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

class Slideshow extends Component{
	state = {
		images: []
	}
	componentDidMount() {
		axios.get('https://api.unsplash.com/photos/?client_id=1c0bb9eb621bfceb10d17b976deb66584ba59aa23a8edced206390d8d26944eb')
		.then(res => {
			this.setState({
				images: res.data.slice(0,5)
			})
		})
	}
	render() {
		const { images } = this.state
		const imageList = images.length ? (
			images.map(image =>{
				return(
					<div className="main-content" key={image.id}>
						<div className="slider-image" style={{ backgroundImage: "url(" + image.urls.regular + ")" }}></div>
					</div>	
				)
			})
			) : (
			<div className="main-content">
				<p>Loading images............</p>
			</div>
		)
		return (
		<div className="main-content">
			<Slider
		    	dots={true}
		        autoplayspeed={7000}
		        arrows={true}
		        fade={true}
		        speed={2000}
		        infinite={true}
		        cssEase={'ease-in-out'}
		        loop={true}
		        autoplay={true}
				>
				{imageList}
			</Slider>
		</div>	
	);
	}
}

export default Slideshow;