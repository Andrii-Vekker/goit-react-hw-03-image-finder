import { ImageList } from "./ImageGallery.styled";
import ImageGalleryLIstItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

export default function ImageGallery({ pictures, getModalPic }) {
  return (
    <ImageList>
      <ImageGalleryLIstItem img={pictures} getModalPicture={getModalPic} />
    </ImageList>
  );
};


ImageGallery.propTypes = {
  getModalPic: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired
}

