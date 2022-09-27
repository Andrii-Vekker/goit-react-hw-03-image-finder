import { ImageList } from "./ImageGallery.styled";
import ImageGalleryLIstItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

export default function ImageGallery({ pictures, getModalPic }) {
  return (
    <ImageList>
      {pictures.map(i => (
        <ImageGalleryLIstItem key={i.id} smallPic={i.webformatURL} tags={i.tags} largePic={i.largeImageURL}
          getModalPicture={getModalPic} />
      ))}
    </ImageList>
  );
};


ImageGallery.propTypes = {
  getModalPic: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
}


// ImageGallery.propTypes = {

//   getModalPic: PropTypes.func.isRequired,
//   pictures: PropTypes.array.isRequired
// }

  // return (
  //   <ImageList>
  //     <ImageGalleryLIstItem img={pictures} getModalPicture={getModalPic} />
  //   </ImageList>
  // );