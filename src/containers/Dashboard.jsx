import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import SideNav from '../components/SideNav.jsx';
import NotificationWindow from '../components/notificationWindow.jsx';
import TechWindow from '../components/techWindow.jsx';
import ProjectList from '../components/ProjectList';
import TechBadgeAchievements from '../components/TechBadgeAchievements';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
        <Row className='dashboard-main'>
          <Col s={8}>
            <ProjectList />
          </Col>
          <Col s={4}>
          BLAH
          <TechList />
          </Col>
        </Row>
      </div>
      );
  }
}
export default Dashboard;

/*
<Col s={8}>
           <Row s={12}>
              <NotificationWindow />
            </Row>
            <Row s={12}>
            <TechWindow />
          </Row>
         </Col>
*/