const BASE_URL = 'http://localhost:3001/api/articles';

const fetchArticleByID = async (articleID) => {
  const response = await fetch(`${BASE_URL}/${articleID}`);
  const data = await response.json();
  return data;
};

const fetchArticlesBySection = async (section) => {
  const response = await fetch(`${BASE_URL}?filter={"where":{"section":"${section}"}}`);
  const data = await response.json();
  return data;
};

const fetchArticles = async (filterTitle = null) => {
  const filterUrl = filterTitle && filterTitle != "" 
    ? `?filter={"where":{"title":{ "ilike": "${filterTitle}"}}}`
    : ""
  const url = BASE_URL + filterUrl
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
