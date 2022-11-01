import { useEffect, useState } from 'react';
import { addCategories, getCategories } from '@/src/services/categories.js';
import CategoryChoose from '@/src/pages/ChooseCategories/subcomponents/CategoryChoose.jsx';
import './ChooseCategories.styles.css';
import GoBackArrow from '@/src/components/GoBackArrow/GoBackArrow.jsx';
import { useTokenContext } from '@/src/context/TokenContext.jsx';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ChooseCategories = () => {
  const authentication = getAuth();

  const navigate = useNavigate();

  const { deleteToken } = useTokenContext();

  const [countries, setCountries] = useState([]);
  const [activities, setActivities] = useState([]);
  const [places, setPlaces] = useState([]);

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();

      setCountries(categories.countries);
      setActivities(categories.activities);
      setPlaces(categories.places);
    })();
  }, []);

  const savePreferences = async () => {
    const response = await addCategories(
      {
        countries: selectedCountries,
        places: selectedPlaces,
        activities: selectedActivities
      },
      authentication.currentUser
    );

    if (response) {
      toast('Preferences saved successfully', { type: 'success' });
      navigate('/');
    } else {
      toast('Something went wrong!', { type: 'error' });
    }
  };

  return (
    <div className="choose-categories-wrapper">
      <GoBackArrow onClick={deleteToken} />

      <p className="choose-categories-title">Tell us what you like!</p>
      <p className="choose-categories-title" style={{ marginBottom: 30 }}>
        Choose up to 3 words in every category.
      </p>

      <CategoryChoose
        categories={countries}
        onCategoryPress={setSelectedCountries}
        title="Countries I would like to visit"
      />

      <CategoryChoose
        categories={places}
        onCategoryPress={setSelectedPlaces}
        title="Places I can relax at"
      />

      <CategoryChoose
        categories={activities}
        onCategoryPress={setSelectedActivities}
        title="Activities I enjoy to do"
      />

      <button onClick={savePreferences}>Submit</button>
    </div>
  );
};

export default ChooseCategories;
