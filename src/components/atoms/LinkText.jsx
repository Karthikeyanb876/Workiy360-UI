import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const LinkText = ({ text, action }) => (
  <Typography variant="body2" align="right" sx={{ mt: 1 }}>
    <Link to={action}>{text}</Link>
  </Typography>
);

export default LinkText;
