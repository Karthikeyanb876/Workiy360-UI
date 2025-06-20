export const fetchPageData = async (pageName = "login") => {
  const response = await fetch("https://3lyk09q201.execute-api.ap-south-1.amazonaws.com/api/pages");
  const data = await response.json();
  return data.find((p) => p.page === pageName);
};
