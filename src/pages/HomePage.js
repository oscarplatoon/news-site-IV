import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticles, searchArticlesByTitle } from '../api/ArticlesAPI';
import { InputGroup, Input } from "reactstrap"

class HomePage extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    try {
      const articlesJson = await fetchArticles();
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }

  async componentDidUpdate() {
    if (this.state.articles == "") {
      try {
        const articlesJson = await fetchArticles();
        this.setState({ articles: articlesJson });
      } catch (e) {
        console.error('error fetching articles: ', e);
      }
    }
   }

  async handleSearch(event) {
    const searchText =  event.target.value;
    let articlesJson = await searchArticlesByTitle(searchText);
    this.setState( {
      articles: articlesJson
    })
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
        </InputGroup>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default HomePage;


// Functional solution:
// function HomePage(props) {
//   const [ articles, setArticles ] = React.useState([]);

//   React.useEffect(() => {
//     const fetchArticlesAsync = async () => {
//       try {
//         const articlesJson = await fetchArticles();
//         setArticles(articlesJson);
//       } catch (e) {
//         console.error('error fetching articles: ', e);
//       }
//     };

//     if (!articles.length) {
//       fetchArticlesAsync();
//     }
//   }, [articles])

//   return (
//     <div>
//       <ArticleList articles={articles} />
//     </div>
//   );
// }
