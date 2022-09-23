import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled"

export default function ImageGalleryLIstItem({ img }) {
  console.log(img)
  return (
      <>
      {img.map(i => (
      <ImageGalleryItem key={i.id} >
         <ImageGalleryItemImg src={i.webformatURL} alt={i.tags} />
      </ImageGalleryItem>
      ))};
     </>
      
  );
};
