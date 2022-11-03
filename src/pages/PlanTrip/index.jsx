import AvailablePinBoards from '../../components/AvailablePinBoards';
import Tabs from '@/src/components/Tabs/index.jsx';
import { useState } from 'react';
import PinDragboxes from '../../components/PinDragboxes';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getTrip } from '../../services/trip';

const PlanTrip = () => {
  const tabValues = {
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening'
  };

  const { id } = useParams();

  const [selectedTab, setSelectedTab] = useState(tabValues.morning);
  const [droppedPinId, setDroppedPinId] = useState('');
  const [currentTrip, setCurrentTrip] = useState();
  const [updated, setUpdated] = useState(false);
  const [draggingStlyles, setDraggingsStyles] = useState({ opacity: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      setLoading(true);
      const result = await getTrip(id);
      setCurrentTrip(result);
      setUpdated(true);
      setLoading(false);
    };

    if (id && !updated) {
      fetchTrip();
    }
  }, [id, updated]);

  const onDragEnd = (result) => {
    setDroppedPinId(result.draggableId);
    setLoading(true);
    setDraggingsStyles({ opacity: 0 });
  };
  const onDragStart = () => setDraggingsStyles({ opacity: 0.2 });
  console.log(currentTrip);
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable droppableId="dropable_area_id">
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

            <div
              style={{
                height: '100vh',
                width: '100vw',
                background: 'black',
                position: 'absolute',
                zIndex: 1,
                opacity: loading ? 0.2 : 0
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
              <Tabs.Tab value={tabValues.morning} label="Morning"></Tabs.Tab>
              <Tabs.Tab value={tabValues.afternoon} label="Afternoon"></Tabs.Tab>
              <Tabs.Tab value={tabValues.evening} label="Evening"></Tabs.Tab>

              <Tabs.TabPanel value={tabValues.morning}>
                <PinDragboxes
                  id="morning-pins"
                  type="morning"
                  droppedId={droppedPinId}
                  tripId={id}
                  onDropUpdated={() => {
                    setDroppedPinId('');
                    setUpdated(false);
                  }}
                  pins={currentTrip?.morningPins || []}
                />
              </Tabs.TabPanel>
              <Tabs.TabPanel value={tabValues.afternoon}>
                <PinDragboxes
                  id="morning-pins"
                  type="afternoon"
                  droppedId={droppedPinId}
                  tripId={id}
                  onDropUpdated={() => {
                    setDroppedPinId('');
                    setUpdated(false);
                  }}
                  pins={currentTrip?.afternoonPins || []}
                />
              </Tabs.TabPanel>
              <Tabs.TabPanel value={tabValues.evening}>
                <PinDragboxes
                  id="morning-pins"
                  type="evening"
                  droppedId={droppedPinId}
                  tripId={id}
                  onDropUpdated={() => {
                    setDroppedPinId('');
                    setUpdated(false);
                  }}
                  pins={currentTrip?.eveningPins || []}
                />
              </Tabs.TabPanel>
            </Tabs>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PlanTrip;
