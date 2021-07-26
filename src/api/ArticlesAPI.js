

const BASE_URL = 'http://localhost:3001/api/articles'

const tryFetch = async (url) => {
  try {
    let response = await fetch(url)
    if (!response.ok) {
      throw response.statusText
    }
    let data = await response.json();
    return data
  } catch (error) {
    console.error(error)
  }
}

const fetchArticleByID = async (articleID) => {
  return await tryFetch(BASE_URL + `/${articleID}`)
}

const fetchArticlesBySection = async (section) => {
  let url = BASE_URL
  url += `?filter={"where":{"section":"${section}"}}`
  return await tryFetch(url)
};

const fetchArticles = async (filters = null) => {
  console.log('fetching articles')
  if (filters == null) return await tryFetch(BASE_URL)
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
