import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"

export const ImageGallery = ({ imagesGallery }) => {
  return (
    <ul className={css.gallery}>
      {imagesGallery.map(imageItem => {
        return <ImageGalleryItem imageItem={imageItem} />
      })}
    </ul>
  )
}