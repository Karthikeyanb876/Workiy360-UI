const Image = ({ src, alt }) => (
  <div style={{ textAlign: "center", marginBottom: 16 }}>
    <img src={src} alt={alt} style={{ maxWidth: "100%", maxHeight: 200 }} />
  </div>
);

export default Image;
