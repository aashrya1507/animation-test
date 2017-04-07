import React from 'react';
import ReactDOM from 'react-dom';
import VideoItem from './video-component';


const VideoList = (props) => {
	var videoList = props.videos.map( video => 
		<VideoItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
	);
		
	return (
		<ul>
			{videoList}
		</ul>
	);
}

export default VideoList;
