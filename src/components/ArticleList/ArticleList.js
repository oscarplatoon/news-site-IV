import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

function ArticleList({ articles }) {
    return (
        <ListGroup>
            {articles.map((article, index) => (
                <ListGroupItem key={index + 1}>
                    <ArticleTeaser {...article} id={index + 1} />
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}
// class ArticleList extends Component {
//     render() {
//         const { articles } = this.props;
//         return (
//             <ListGroup>
//                 {articles.map((article, index) => (
//                     <ListGroupItem key={index + 1}>
//                         <ArticleTeaser {...article} id={index + 1} />
//                     </ListGroupItem>
//                 ))}
//             </ListGroup>
//         );
//     }
// }

export default ArticleList;


