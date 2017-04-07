import React from 'react';
import ReactDOM from 'react-dom';


const VideoDetails = ({video}) => {
	if(!video) {
		return <div>Loading.......</div>
	}

	const videoID = video.id.videoId;
	const videoUrl = `https://www.youtube.com/embed/${videoID}`
	return (
		<div>
			<div className="iFrame">
				<iframe src={videoUrl}></iframe>
			</div>
			<div className="iFrame-details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetails;
