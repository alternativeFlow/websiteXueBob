import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {


		return(
		  <div>
		  	<link
			  rel="stylesheet"
			  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			  crossorigin="anonymous"
			/>
		    <Route location={this.props.location} path="/" exact component={HomePage} />
 		  </div>
		);
	}
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
