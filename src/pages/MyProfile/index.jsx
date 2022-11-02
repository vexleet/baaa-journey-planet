//Kris

import Tabs from '@/src/components/Tabs/index.jsx';
import { useEffect, useState } from 'react';
import { useTokenContext } from '@/src/context/TokenContext.jsx';
import './index.styles.css';
import { getPins } from '@/src/services/pins.js';
import { getPingboards } from '@/src/services/pingboards.js';
import MyProfilePinsList from '@/src/pages/MyProfile/subcomponents/MyProfilePinsList.jsx';
import MyProfilePingboards from '@/src/pages/MyProfile/subcomponents/MyProfilePingboards.jsx';
import LoadingScreen from '@/src/components/LoadingScreen/index.jsx';
import MyProfileTripsList from '@/src/pages/MyProfile/subcomponents/MyProfileTripsList.jsx';
import { getTrips } from '@/src/services/trip.js';

const MyProfile = () => {
  const { user } = useTokenContext();

  const [loading, setLoading] = useState(false);

  const [pins, setPins] = useState([]);
  const [pingboards, setPingboards] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      await requestGetPins();
      await requestGetPingboards();
      await requestGetTrips();

      setLoading(false);
    })();
  }, []);

  const requestGetPins = async () => {
    const pinsResponse = await getPins();

    setPins(pinsResponse);
  };

  const requestGetPingboards = async () => {
    const pingboardsResponse = await getPingboards(user);

    setPingboards(pingboardsResponse);
  };

  const requestGetTrips = async () => {
    const tripsResponse = await getTrips(user);

    setTrips(tripsResponse);
  };

  const tabValues = {
    trips: 'trips',
    pingboards: 'pingboards',
    pings: 'pings'
  };

  const [selectedTab, setSelectedTab] = useState(tabValues.trips);

  return (
    <>
      {loading === false ? (
        <div
          className="profile-page"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
          <div style={{ textAlign: 'center', marginBottom: 25 }} className="text profile-section">
            <img src="/images/default-user.svg" width={85} height={85} />
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
              <MyProfileTripsList trips={trips} onAddTrip={requestGetTrips} />
            </Tabs.TabPanel>
            <Tabs.TabPanel value={tabValues.pingboards}>
              <MyProfilePingboards pingboards={pingboards} onAddPingboards={requestGetPingboards} />
            </Tabs.TabPanel>
            <Tabs.TabPanel value={tabValues.pings}>
              <MyProfilePinsList pins={pins} onAddPin={requestGetPins} />
            </Tabs.TabPanel>
          </Tabs>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default MyProfile;
