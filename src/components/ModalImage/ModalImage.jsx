import Modal from 'react-modal';
import css from "./ModalImage.module.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 0,
    background: 0,
  },
    overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  }
};

Modal.setAppElement('#root');

export const ModalImage = ({isOpen, onRequestClose, src, alt}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <img className={css.image} src={src} alt={alt} />
    </Modal>
  )
}