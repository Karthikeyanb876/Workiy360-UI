import { TextField, InputAdornment } from "@mui/material";
import { Business, Person } from "@mui/icons-material";

const iconMap = {
  building: <Business />,
  user: <Person />,
};

const TextInput = ({ label, name, icon }) => (
  <TextField
    fullWidth
    margin="normal"
    label={label}
    name={name}
    InputProps={{
      startAdornment: icon && (
        <InputAdornment position="start">{iconMap[icon]}</InputAdornment>
      ),
    }}
  />
);

export default TextInput;
