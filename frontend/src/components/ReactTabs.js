import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/ReactTabs.css'
import RestartLinks from './RestartLinks';


class ReactTabs extends Component {
    render() {
        return (
              <Tabs>
                  <TabList>
                  <div className="sidenav">
                    <Tab><p>About</p></Tab>
                    <Tab><p>Services</p></Tab>
                    <Tab><p>Clients</p></Tab>
                    <Tab><p>Contact</p></Tab>
                  </div>
                  </TabList>

                  <TabPanel>
                    <div className="center">
                    <RestartLinks />
                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>hello tab number 2</p>
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>hello tab number 3</p>
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>hello tab number 4</p>
                  </div>
                  </TabPanel>
              </Tabs>
                
        );
    }
}

export default ReactTabs;