import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import LoginForm from "../molecules/LoginForm.jsx";
import { fetchPageData } from "../../services/api.js";

const Login = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchPageData("login").then(setPage);
  }, []);

  if (!page) return <div>Loading...</div>;

  // Debug log
  console.log('Fetched page data:', page);

  if (!page.components || page.components.length === 0) {
    return <div>No components to display.</div>;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {page.title}
      </Typography>
      <LoginForm components={page.components} />
    </Container>
  );
};

export default Login;
