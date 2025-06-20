import Logo from "../atoms/Logo.jsx";
import Image from "../atoms/Image.jsx";
import TextInput from "../atoms/TextInput.jsx";
import PasswordInput from "../atoms/PasswordInput.jsx";
import LinkText from "../atoms/LinkText.jsx";
import Button from "../atoms/Button.jsx";

const componentMap = {
  logo: Logo,
  image: Image,
  "text-input": TextInput,
  "password-input": PasswordInput,
  link: LinkText,
  button: Button,
};

const LoginForm = ({ components }) => {
  return components.map((comp, index) => {
    const Component = componentMap[comp.type];
    return Component ? <Component key={index} {...comp} /> : null;
  });
};

export default LoginForm;
