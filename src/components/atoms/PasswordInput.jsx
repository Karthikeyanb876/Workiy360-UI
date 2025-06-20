import { TextField, InputAdornment } from "@mui/material";
import { Lock } from "@mui/icons-material";

const PasswordInput = ({ label, name }) => (
  <TextField
    fullWidth
    margin="normal"
    label={label}
    name={name}
    type="password"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Lock />
        </InputAdornment>
      ),
    }}
  />
);

export default PasswordInput;
