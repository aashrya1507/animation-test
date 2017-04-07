import React from 'react';
import ReactDOM from 'react-dom';


const SearchBar = React.createClass({
	
	render() {
		return <input type="search" onChange={(e) => this.props.onSearch(e.target.value)}/>;
	}
});

export default SearchBar;