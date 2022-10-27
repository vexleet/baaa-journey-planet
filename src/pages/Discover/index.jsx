import SearchBar from '../../components/SearchBar';
import { getPins } from '@/services/pins.js';

const Discover = () => {
  console.log(getPins);
  return (
    <main>
      <SearchBar placeholder="Search..." data={getPins} />
    </main>
  );
};

export default Discover;
