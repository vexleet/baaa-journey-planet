import { useState } from 'react';
import CreatePingboard from '@/components/CreatePingboard/index.jsx';
import EmptyPageState from '@/components/EmptyPageState/index.jsx';

const MyProfilePingboards = () => {
  const [addPingBoardIsOpen, setAddPingBoardIsOpen] = useState(false);

  return (
    <>
      <EmptyPageState
        text="You have no pingboards yet. Why don't you create one?"
        onButtonClick={() => setAddPingBoardIsOpen(true)}
        buttonLabel="Create pingboard"
      />

      <CreatePingboard setIsVisible={setAddPingBoardIsOpen} isVisible={addPingBoardIsOpen} />
    </>
  );
};

export default MyProfilePingboards;
