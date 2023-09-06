export const Modal = ({ currentImage, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={currentImage} alt="" />
      </div>
    </div>
  );
};
