import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/TabComponenet.css';
import TabNav from './TabNav';
import Academy from './Academy';
import Maintenance from './Maintenance';
import Offer from './Offer';


const TabComponent = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <TabNav
                        icon={<i className="fas fa-desktop fa-2x"></i>}
                        title="Fully Detailed & Academic Content"
                    />
                </Tab>
                <Tab>
                    <TabNav
                        icon={<i className="fas fa-wrench fa-2x"></i>}
                        title="24/7 Maintenance Team"
                    />
                </Tab>
                <Tab>
                    <TabNav
                        icon={<i className="fas fa-hand-holding-usd fa-2x"></i>}
                        title="30 Days Money Back Guarantee"
                    />
                </Tab>
            </TabList>
            <TabPanel>
                <Academy />
            </TabPanel>
            <TabPanel>
                <Maintenance />
            </TabPanel>
            <TabPanel>
                <Offer />
            </TabPanel>
        </Tabs>
    );
}

export default TabComponent;
