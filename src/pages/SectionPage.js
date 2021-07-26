import React, { Component } from 'react';
import ArticlesAPI from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList.js';

class SectionPage extends Component {
  state = {
    articles: [],
    section: "",
  };

  // Life cycles:
  async componentDidMount() {
    try {
      const sectionID = this.props.match.params.sectionID
      this.setState({ section: sectionID})
      const sectionArticles = await ArticlesAPI.fetchArticlesBySection(sectionID);
      this.setState({ articles: sectionArticles });
    } catch (e) {
      console.error('error fetching section articles: ', e);
    }
  }

  async componentDidUpdate(prevState) {
    if(prevState.articles !== this.state.articles) {
      try {
        const articlesJson = await ArticlesAPI.fetchArticlesBySection(this.props.match.params.sectionID);
        this.setState({ articles: articlesJson});
      } catch (e) {
        console.error('something has gone very wrong: ', e)
      }
    }
  }
  
  render() {
    return (
      <div>
        <h2>
          {this.state.section ?
          `${this.state.section} page`
          : 'NO SECTION.'
        }
        </h2>
        <hr />
        {this.state.articles ? <ArticleList articles={ this.state.articles }/> :
          <span>404: Article Not Found</span>
        }
      </div>
    );
  }
}

export default SectionPage;


// Functional solution:
// function ArticlePage(props) {
//   const [ article, setArticle ] = React.useState(null);

//   React.useEffect(() => {
//     const fetchArticleAsync = async () => {
//       try {
//         const articlesJson = await fetchArticleByID(props.match.params.articleID);
//         setArticle(articlesJson);
//       } catch (e) {
//         console.error('error fetching article: ', e);
//       }
//     };

//     if (article === null) {
//       fetchArticleAsync();
//     }
//   }, [article]);

//   return (
//     <div>
//       {article ? <Article {...article} /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
