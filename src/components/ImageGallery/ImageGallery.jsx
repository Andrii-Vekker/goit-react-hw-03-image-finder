import { ImageList } from "./ImageGallery.styled";
import ImageGalleryLIstItem from "components/ImageGalleryItem/ImageGalleryItem";


export default function ImageGallery({ pictures, getModalPic }) {
  return (
    <ImageList>
      <ImageGalleryLIstItem img={pictures} getModalPicture={getModalPic} />
    </ImageList>
  );
};
