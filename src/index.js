import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-component';
import VideoList from './video-list';
import Carousal from './slider-component'
import VideoDetails from './video-details';
import _ from 'lodash';
const API_KEY = 'AIzaSyCdkfBgzn97lqMaA3M0dwfUanE9KDbK5Gs';

const App = React.createClass({
	
	onSearch(term) {
		var self = this;
		YTSearch({key: API_KEY, term: term}, function(videos) {
			const selectedVideo = videos[0];
			self.setState({
				videos,
				selectedVideo
			});
		});
	},
	onVideoSelect(selectedVideo) {
		this.setState({selectedVideo});
	},
	getInitialState() {
		return {videos: [], selectedVideo: null};
	},
	render() {
		var videoSearch = _.debounce( term => {this.onSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearch={videoSearch} />
				<VideoDetails  video={this.state.selectedVideo}/>
				<Carousal videos={this.state.videos}>
					{/*<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />*/}
				</Carousal>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.querySelector('.container'));