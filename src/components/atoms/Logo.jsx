const Logo = ({ image, text }) => (
  <div style={{ textAlign: "center", marginBottom: 16 }}>
    <img src={image} alt={text} style={{ height: 40 }} />
  </div>
);

export default Logo;
