import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

class TechBadgeAchievements extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			{
				<div id='techBadgeContainer'>
		          <a href="#"><i class="fa fa-github fa-3x"></i></a> 
		          <a href="#"><i class="fa fa-html5 fa-3x"></i></a> 
		          <a href="#"><i class="fa fa-css3 fa-3x"></i></a>
				</div>
			}
		);
	}

}
export default TechBadgeAchievements;