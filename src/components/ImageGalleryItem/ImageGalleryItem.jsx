import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled";

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
