import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Button = ({ label, style, action }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action) navigate(action);
  };

  return (
    <MuiButton
      fullWidth
      variant={style === "primary" ? "contained" : "outlined"}
      onClick={handleClick}
      sx={{ mt: 2 }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
