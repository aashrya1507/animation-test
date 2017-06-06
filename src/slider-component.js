import React from 'react';
import ReactDom from 'react-dom';
import Slider from 'react-coverflow';

var Carousal = React.createClass({
	
	render() {
		var imageUrl;
		var imageList = this.props.videos.map((video, index) => {
			imageUrl = video.snippet.thumbnails.default.url
			return <img className="slider-item" src={imageUrl} key={index}/>
		});
		var settings = {
			slidesToShow: 4,
      slidesToScroll: 1
		};

		if(imageList.length > 0) {
			return (
				<div className="slider-container">
					<Slider width={960}
				    height={180}
				    displayQuantityOfSide={2}
				    navigation={false}
				    enableHeading={false}>
						{imageList}
					</Slider>
				</div>
			);
		} else {
			return <div>Loading***************</div>;
		}
	}
});

export default Carousal;