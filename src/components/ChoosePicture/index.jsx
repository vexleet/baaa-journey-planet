import { useRef } from 'react';
import './index.css';
import PropTypes from 'prop-types';

const ChoosePicture = ({ images, handleImageChange, isMultiple }) => {
  const inputFile = useRef(null);

  const handleImageUpload = (e) => {
    if (e.target.files.length !== 0) handleImageChange(e.target.files);
  };

  const openFileBrowser = () => inputFile.current.click();

  const getPreviewImage = () => {
    if (images[0]) {
      return <img src={URL.createObjectURL(images[0])} style={{ width: '100%', height: '100%' }} />;
    }

    return <img src="src/assets/icons/image.svg" width={50} height={50} />;
  };

  return (
    <div>
      <p>Choose picture</p>
      <div className="choose-image-container" onClick={openFileBrowser}>
        {getPreviewImage()}
      </div>

      <input
        ref={inputFile}
        type="file"
        id="files"
        name="files"
        multiple={isMultiple}
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
    </div>
  );
};

ChoosePicture.propTypes = {
  images: PropTypes.any.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  isMultiple: PropTypes.bool
};

ChoosePicture.defaultProps = {
  isMultiple: false
};

export default ChoosePicture;
