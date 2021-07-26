import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ArticleList extends Component {
  
  renderArticles() {
    if (this.props.articles.length == 0) {
      return <p>No articles found!</p>
    }
    
    let elements = this.props.articles.map((article, index) => (
      <ListGroupItem>
        <ArticleTeaser { ...article } id={ index + 1 } />
      </ListGroupItem>
    ))
    
    return elements
  }
  
  render() {
    return (
      <ListGroup>
        { this.renderArticles() }
      </ListGroup>
    );
  }
}

export default ArticleList;


// Functional solution:
// function ArticleList({ articles }) {
//   return (
//     <ListGroup>
//       {articles.map((article, index) => (
//         <ListGroupItem>
//           <ArticleTeaser {...article} id={ index + 1 } />
//         </ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// }
