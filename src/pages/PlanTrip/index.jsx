import AvailablePinBoards from '../../components/AvailablePinBoards';
import Tabs from '@/components/Tabs/index.jsx';
import { useState } from 'react';
import PinDragboxes from '../../components/PinDragboxes';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getTrip } from '../../services/trip';

const PlanTrip = () => {
  const tabValues = {
    trips: 'trips',
    pingboards: 'pingboards',
    pings: 'pings'
  };

  const { id } = useParams();

  const [selectedTab, setSelectedTab] = useState(tabValues.trips);
  const [droppedPinId, setDroppedPinId] = useState('');
  const [currentTrip, setCurrentTrip] = useState();
  const [updated, setUpdated] = useState(false);
  const [draggingStlyles, setDraggingsStyles] = useState({ opacity: 0 });

  useEffect(() => {
    const fetchTrip = async () => {
      const result = await getTrip(id);
      console.log('sweet child in time');
      setCurrentTrip(result);
      setUpdated(true);
    };

    if (id && !updated) {
      fetchTrip();
    }
  }, [id, updated]);

  console.log('budala', currentTrip);
  const onDragEnd = (result) => {
    setDroppedPinId(result.draggableId);
    setDraggingsStyles({ opacity: 0 });
  };
  const onDragUpdate = (result) => console.log('daa', document.getElementById(result.dr));
  const onDragStart = () => setDraggingsStyles({ opacity: 0.2 });

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate} onDragStart={onDragStart}>
      <Droppable droppableId="SomeId">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ position: 'relative' }}>
            <div
              style={{
                height: '100vh',
                width: '100vw',
                background: 'black',
                position: 'absolute',
                zIndex: 1,
                ...draggingStlyles
              }}
            />
            <AvailablePinBoards />
            <Tabs
              Tabs
              className="profile-tabs"
              tabsClassName="profile-tabs-wrapper"
              tabsPanelClassName="profile-tabs-panel-wrapper"
              onChange={setSelectedTab}
              value={selectedTab}>
              <Tabs.Tab value={tabValues.trips} label="Morning"></Tabs.Tab>
              <Tabs.Tab value={tabValues.pingboards} label="Afternoon"></Tabs.Tab>
              <Tabs.Tab value={tabValues.pings} label="Evening"></Tabs.Tab>

              <Tabs.TabPanel value={tabValues.trips}>
                <PinDragboxes
                  id="morning-pins"
                  droppedId={droppedPinId}
                  tripId={id}
                  onDropUpdated={() => {
                    setDroppedPinId('');
                    setUpdated(false);
                  }}
                  pins={currentTrip?.morningPins || []}
                />
              </Tabs.TabPanel>
              <Tabs.TabPanel value={tabValues.pingboards}></Tabs.TabPanel>
              <Tabs.TabPanel value={tabValues.pings}></Tabs.TabPanel>
            </Tabs>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PlanTrip;
