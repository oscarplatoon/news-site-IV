import React, { Component } from 'react';
import ArticlesAPI from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList.js';

class SectionPage extends Component {
  state = {
    articles: null
  };

  async componentDidMount() {
    try {
      // console.log('section id is: ', this.props.sectionID)
      const articlesJson = await ArticlesAPI.fetchArticlesBySection(this.props.match.params.sectionID);
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching article: ', e);
    }
  }
  
  render() {
    console.log(this.props)
    console.log(this.state.articles)
    return (
      <div>
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
