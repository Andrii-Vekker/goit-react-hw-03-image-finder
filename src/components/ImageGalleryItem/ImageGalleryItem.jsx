import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export default function ImageGalleryLIstItem({smallPic, tags, largePic, getModalPicture }) {
   function getIndex(largePic) {
     getModalPicture(largePic)
  };

  return (
      <>
      
      <ImageGalleryItem>
            <ImageGalleryItemImg src={smallPic} alt={tags} onClick={() => getIndex(largePic)} />
      </ImageGalleryItem>
     
     </>
      
  );
 
};

ImageGalleryLIstItem.propTypes = {
  getModalPicture: PropTypes.func.isRequired,
  smallPic: PropTypes.string.isRequired,
  largePic: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired

};

// ImageGalleryLIstItem.propTypes = {
//   getModalPicture: PropTypes.func.isRequired,
//   img: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired , 
//       tags: PropTypes.string.isRequired
//     })
//   )
// }