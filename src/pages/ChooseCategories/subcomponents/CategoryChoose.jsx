import PropTypes from 'prop-types';
import Chip from '@/components/Chip/Chip.jsx';
import { useEffect, useState } from 'react';

const maxCategories = 3;

const CategoryChoose = ({ categories, onCategoryPress, title }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [hasMaxCategories, setHasMaxCategories] = useState(false);

  useEffect(() => {
    const isMaxCategories = selectedCategory.length === maxCategories;

    if (!isMaxCategories) {
      onCategoryPress(selectedCategory);
    }

    setHasMaxCategories(isMaxCategories);
  }, [selectedCategory]);

  const selectCategory = (category) => {
    if (!hasMaxCategories) {
      setSelectedCategory((prevState) => [...prevState, category]);
    }
  };

  return (
    <div>
      <p>{title}</p>

      {categories.map((category) => (
        <div key={category} onClick={() => selectCategory(category)}>
          <Chip color={hasMaxCategories ? 'red' : 'blue'}>{category}</Chip>
        </div>
      ))}
    </div>
  );
};

CategoryChoose.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  onCategoryPress: PropTypes.func.isRequired
};

export default CategoryChoose;
