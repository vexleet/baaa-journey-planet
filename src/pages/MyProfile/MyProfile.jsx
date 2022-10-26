import Tabs from '@/components/Tabs/index.jsx';
import { useState } from 'react';

const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <div>
      <Tabs onChange={setSelectedTab} value={selectedTab}>
        <Tabs.Tab value="test333" label="test333"></Tabs.Tab>
        <Tabs.Tab value="test21" label="test21"></Tabs.Tab>
        <Tabs.Tab value="test123" label="test123"></Tabs.Tab>

        <Tabs.TabPanel value="test333">hello world</Tabs.TabPanel>
        <Tabs.TabPanel value="test21">hello world1</Tabs.TabPanel>
        <Tabs.TabPanel value="test123">hello world2</Tabs.TabPanel>
      </Tabs>
    </div>
  );
};

export default MyProfile;
