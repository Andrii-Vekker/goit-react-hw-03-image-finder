import { ImageList } from "./ImageGallery.styled";
import ImageGalleryLIstItem from "components/ImageGalleryItem/ImageGalleryItem";


export default function ImageGallery({pictures}) {
  return (
      <ImageList>
      <ImageGalleryLIstItem img={pictures} />
    </ImageList>
  )
}
