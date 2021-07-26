import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticles } from '../api/ArticlesAPI';
import { InputGroup, Input } from "reactstrap"

class HomePage extends Component {
  state = {
    articles: [],
    filterText: ""
  };

  async updateArticles() {
    try {
      const articlesJson = await fetchArticles(this.state.filterText);
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }

  async componentDidMount() {
    this.updateArticles()
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(this.state)

    // only get the articles list again if our filter has changed
    if (prevState.filterText != this.state.filterText)
      this.updateArticles()
  }

  handleSearch = (e) => {
    let inputValue = e.target.value
    console.log(inputValue)

    this.setState({
      filterText: inputValue
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
