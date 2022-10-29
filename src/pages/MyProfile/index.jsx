import Tabs from '@/components/Tabs/index.jsx';
import { useEffect, useState } from 'react';
import { useTokenContext } from '@/context/TokenContext.jsx';
import './index.styles.css';
import { getPins } from '@/services/pins.js';
import { getPingboards } from '@/services/pingboards.js';
import MyProfilePinsList from '@/pages/MyProfile/subcomponents/MyProfilePinsList.jsx';
import MyProfilePingboards from '@/pages/MyProfile/subcomponents/MyProfilePingboards.jsx';
import MyProfileTripsList from '@/pages/MyProfile/subcomponents/MyProfileTripsList.jsx';

const MyProfile = () => {
  const { user } = useTokenContext();

  const [pins, setPins] = useState([]);
  const [, setPingboards] = useState([]);

  useEffect(() => {
    // TODO SMALL CHALLENGE FOR DORI - ADD LOADING :)
    (async () => {
      const pinsResponse = await getPins();
      const pingboardsResponse = await getPingboards(user);

      setPins(pinsResponse);
      setPingboards(pingboardsResponse);
    })();
  }, []);

  const tabValues = {
    trips: 'trips',
    pingboards: 'pingboards',
    pings: 'pings'
  };

  const [selectedTab, setSelectedTab] = useState(tabValues.trips);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <div style={{ textAlign: 'center', marginBottom: 25 }}>
        <img src="src/assets/images/default-user.svg" width={85} height={85} />
        <p>{user.displayName}</p>
      </div>

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
          <MyProfileTripsList trips={[]} />
        </Tabs.TabPanel>
        <Tabs.TabPanel value={tabValues.pingboards}>
          <MyProfilePingboards />
        </Tabs.TabPanel>
        <Tabs.TabPanel value={tabValues.pings}>
          {pins.length !== 0 && <MyProfilePinsList pins={pins} />}
        </Tabs.TabPanel>
      </Tabs>
    </div>
  );
};

export default MyProfile;
