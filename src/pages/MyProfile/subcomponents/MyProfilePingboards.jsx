import { useState } from 'react';
import CreatePingboard from '@/components/CreatePingboard/index.jsx';

const MyProfilePingboards = () => {
  const [addPingBoardIsOpen, setAddPingBoardIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        {/*  TODO ADD FOR EACH COMPONENT WHEN PLAMEN MAKES THE PINGBOARD COMPONENT*/}

        <p>You have no pingboards</p>
        <button onClick={() => setAddPingBoardIsOpen(true)}>Create pingboards</button>
      </div>

      <CreatePingboard setIsVisible={setAddPingBoardIsOpen} isVisible={addPingBoardIsOpen} />
    </>
  );
};

export default MyProfilePingboards;
