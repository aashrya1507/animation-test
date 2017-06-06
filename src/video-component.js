import React from 'react';
import ReactDOM from 'react-dom';

const VideoItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="video-block">
			<div className="media-left">
				<img src={imageUrl} />
			</div>
			{/*<div className="media-desc">
				<div className="media-heading">{video.snippet.title}</div>
			</div>*/}
		</li>
	);
}

export default VideoItem;