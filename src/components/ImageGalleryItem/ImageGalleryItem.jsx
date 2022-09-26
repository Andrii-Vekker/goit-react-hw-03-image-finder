import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export default function ImageGalleryLIstItem({ img, getModalPicture }) {
   function getIndex(largePic) {
     getModalPicture(largePic)
}
   
  return (
      <>
      {img.map(i => (
      <ImageGalleryItem key={i.id} >
            <ImageGalleryItemImg src={i.webformatURL} alt={i.tags} onClick={() => getIndex(i.largeImageURL)} />
      </ImageGalleryItem>
      ))};
     </>
      
  );
};

ImageGalleryLIstItem.propTypes = {
  getModalPicture: PropTypes.func.isRequired,
  img: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired , 
      tags: PropTypes.string.isRequired
    })
  )
}