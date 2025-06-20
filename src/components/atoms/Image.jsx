import "../../assets/styles/Image.css";

const Image = ({ src, alt }) => (
  <div className="image-container">
    <img src={src} alt={alt} className="image" />
  </div>
);

export default Image;
