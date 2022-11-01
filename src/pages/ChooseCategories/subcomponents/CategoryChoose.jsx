import PropTypes from 'prop-types';
import Chip from '@/src/components/Chip/Chip.jsx';
import { useEffect, useState } from 'react';
import './CategoryChoose.styles.css';

const maxCategories = 3;

const CategoryChoose = ({ categories, onCategoryPress, title }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    onCategoryPress(selectedCategories);
  }, [selectedCategories]);

  const isMaxCategories = () => {
    return selectedCategories.length === maxCategories;
  };

  const selectCategory = (category) => {
    setSelectedCategories((prevState) => [...prevState, category]);
  };

  const deselectCategory = (category) => {
    const indexOfCategory = selectedCategories.indexOf(category);

    const selectedCategoriesCopy = selectedCategories.slice();
    selectedCategoriesCopy.splice(indexOfCategory, 1);

    setSelectedCategories(selectedCategoriesCopy);
  };

  const isSelectedCategory = (category) => {
    return selectedCategories.includes(category);
  };

  const toggleCategory = (category) => {
    if (isSelectedCategory(category)) {
      deselectCategory(category);
    }
    if (!isSelectedCategory(category) && !isMaxCategories()) {
      selectCategory(category);
    }
  };

  return (
    <div>
      <p>{title}</p>

      <div className="chips-wrapper">
        {categories.map((category) => (
          <div className="chip-wrapper" key={category} onClick={() => toggleCategory(category)}>
            <Chip className="w-100" color={isSelectedCategory(category) ? 'red' : 'blue'}>
              {category}
            </Chip>
          </div>
        ))}
      </div>
    </div>
  );
};

CategoryChoose.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  onCategoryPress: PropTypes.func.isRequired
};

export default CategoryChoose;
