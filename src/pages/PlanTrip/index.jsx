import AvailablePinBoards from '../../components/AvailablePinBoards';
import Tabs from '@/components/Tabs/index.jsx';
import { useState } from 'react';
import PinDragboxes from '../../components/PinDragboxes';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const PlanTrip = () => {
  const tabValues = {
    trips: 'trips',
    pingboards: 'pingboards',
    pings: 'pings'
  };

  const [selectedTab, setSelectedTab] = useState(tabValues.trips);

  return (
    <DndProvider backend={HTML5Backend}>
      <AvailablePinBoards />

      <Tabs
        className="profile-tabs"
        tabsClassName="profile-tabs-wrapper"
        tabsPanelClassName="profile-tabs-panel-wrapper"
        onChange={setSelectedTab}
        value={selectedTab}>
        <Tabs.Tab value={tabValues.trips} label="Trips"></Tabs.Tab>
        <Tabs.Tab value={tabValues.pingboards} label="Pingboard"></Tabs.Tab>
        <Tabs.Tab value={tabValues.pings} label="Pings"></Tabs.Tab>

        <Tabs.TabPanel value={tabValues.trips}>
          <PinDragboxes />
        </Tabs.TabPanel>
        <Tabs.TabPanel value={tabValues.pingboards}></Tabs.TabPanel>
        <Tabs.TabPanel value={tabValues.pings}></Tabs.TabPanel>
      </Tabs>
    </DndProvider>
  );
};

export default PlanTrip;
