import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/StudentTabs.css';
import Header from './Header';
import Footer from './Footer';
import StudentProfile from './StudentProfile';
import StudentChangeLinks from './StudentChangeLinks';
import BadgesPage from './BadgesPage';
import ChangeRequest from './ChangeRequest'
class StudentTabs extends Component {
    render() {
        return (
            <div>
                <Header />
                <Tabs>
                  <TabList>
                  <div className="sidenav">
                    <Tab><p>Profile</p></Tab>
                    <Tab><p>Challenges</p></Tab>
                    <Tab><p>Badges</p></Tab>
                    <Tab><p>Modify my links</p></Tab>
                    <Tab><p>Request change for my information</p></Tab>
                  </div>
                  </TabList>

                  <TabPanel>
                    <div className="center">
                    <StudentProfile />
                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>Challenges page</p>
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>badge pages</p>
                    <BadgesPage />
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>Modify your Links</p>
                    <StudentChangeLinks />
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>Request change</p>
                    <ChangeRequest />
                  </div>
                  </TabPanel>
              </Tabs>

            </div>
        );
    }
}

export default StudentTabs;