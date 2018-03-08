import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/StudentHome.css'
import RestartLinks from './RestartLinks';

class StudentHome extends Component {
    render() {
        return (
              <Tabs>
                  <TabList>
                  <div className="sidenav">
                    <Tab><p>Profile</p></Tab>
                    <Tab><p>Badges</p></Tab>
                  </div>
                  </TabList>

                  <TabPanel>
                    <div className="center">

                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">

                  </div>
                  </TabPanel>
              </Tabs>
        );
    }
}

export default StudentHome;
