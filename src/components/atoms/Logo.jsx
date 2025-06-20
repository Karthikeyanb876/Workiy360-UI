import "../../assets/styles/Logo.css";

const Logo = ({ image, text }) => (
  <div className="logo-container">
    <img src={image} alt={text} className="logo-image" />
  </div>
);

export default Logo;
