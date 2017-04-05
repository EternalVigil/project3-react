import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

console.log('dashboard');

className Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
		<div className="row feedContainer">
			<div id="projectTileContainer" className="newsfeed col s8"> 
				<div className="projectTile">
					<div className="projectTileContent">
						<ul>
							<li>Name: CodeSpiration 2.0</li>
							<li>Status: Ongoing Project</li>
							<li>GitHub: <a href='https://github.com/EternalVigil/project3-react'>Click Here</a></li>
						</ul>
					</div>
				</div>
					<div className='projectTile'>
						<div className='projectTileContent'>
							<ul>
								<li>Name: CodeSpiration Itinerary Loader</li>
								<li>Status: In Progress</li>
								<li>GitHub: <a href='https://github.com/EternalVigil/project3-react'>Click Here</a></li>
							</ul>
						</div>
					</div>
					<div className='projectTile'>
						<div className='projectTileContent'>
							<ul>
								<li>Name: CodeSpiration </li>
								<li>Status: In Progress</li>
								<li>GitHub: <a href='https://github.com/EternalVigil/project3-react'>Click Here</a></li>
							</ul>
						</div>
					</div>
					<div className="projectTile">
						<div className='projectTileContent'>
							<ul>
								<li>Name: CodeSpiration 1.0</li>
								<li>Status: Completed</li>
								<li>GitHub: <a href='https://github.com/itsevalieu/codespiration'>Click Here</a></li>
							</ul>
						</div>
					</div>
					<div className="projectTile">
						<div className='projectTileContent'>
							<ul>
								<li>Name: Community Jukebox</li>
								<li>Status: Completed</li>
								<li>GitHub: <a href='https://github.com/EternalVigil/project1'>Click Here</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Dashboard;