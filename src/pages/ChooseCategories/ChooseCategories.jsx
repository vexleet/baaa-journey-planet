import { useEffect, useState } from 'react';
import { getCategories } from '@/services/categories.js';
import CategoryChoose from '@/pages/ChooseCategories/subcomponents/CategoryChoose.jsx';

const ChooseCategories = () => {
  const [countries, setCountries] = useState([]);
  const [activities, setActivities] = useState([]);
  const [places, setPlaces] = useState([]);

  const [, setSelectedCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();

      setCountries(categories.countries);
      setActivities(categories.activities);
      setPlaces(categories.places);
    })();
  }, []);

  return (
    <>
      <h1>im ctagories page</h1>

      <CategoryChoose
        categories={countries}
        onCategoryPress={setSelectedCountries}
        title="Countries I would like to visit"
      />
      {/*{countries.map((x) => (*/}
      {/*  <Chip color="red" key={x}>*/}
      {/*    {x}*/}
      {/*  </Chip>*/}
      {/*))}*/}
      <hr />
      {activities.map((x) => (
        <h1 key={x}>{x}</h1>
      ))}
      <hr />
      {places.map((x) => (
        <h1 key={x}>{x}</h1>
      ))}
    </>
  );
};

export default ChooseCategories;
