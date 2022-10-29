import Tabs from '@/components/Tabs/index.jsx';
import { useState } from 'react';

const MyProfile = () => {
  const tabValues = {
    trips: 'trips',
    pingboards: 'pingboards',
    pings: 'pings'
  };

  const [selectedTab, setSelectedTab] = useState(tabValues.trips);

  return (
    <div>
      <Tabs onChange={setSelectedTab} value={selectedTab}>
        <Tabs.Tab value={tabValues.trips} label="Trips"></Tabs.Tab>
        <Tabs.Tab value={tabValues.pingboards} label="Pingboard"></Tabs.Tab>
        <Tabs.Tab value={tabValues.pings} label="Pings"></Tabs.Tab>

        <Tabs.TabPanel value={tabValues.trips}>hello world</Tabs.TabPanel>
        <Tabs.TabPanel value={tabValues.pingboards}>hello world1</Tabs.TabPanel>
        <Tabs.TabPanel value={tabValues.pings}>hello world2</Tabs.TabPanel>
      </Tabs>
    </div>
  );
};

export default MyProfile;
