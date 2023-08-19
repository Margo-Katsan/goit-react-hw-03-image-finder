import { Component } from "react";
import { ModalImage } from "components/ModalImage/ModalImage";
import css from "./ImageGalleryItem.module.css";

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false
  }

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      imageItem: { id, webformatURL, tags, largeImageURL } 
    } = this.props
    return (
      <li key={id} className={css.galleryItem}>
        <img className={css.galleryImage} src={webformatURL} alt={tags} onClick={this.openModal} />
        <ModalImage
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          src={largeImageURL}
          alt={tags}
        />
      </li>
    )
  }
}