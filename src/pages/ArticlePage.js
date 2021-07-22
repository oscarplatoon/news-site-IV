import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import { fetchArticleByID } from '../api/ArticlesAPI';

function ArticlePage(props) {
    const [article, setArticle] = React.useState(null);

    React.useEffect(() => {
        const fetchArticleAsync = async () => {
            try {
                const articleJson = await fetchArticleByID(props.match.params.articleID);
                setArticle(articleJson);
            } catch (e) {
                console.error('error fetching article: ', e);
            }
        };

        if (article === null) {
            fetchArticleAsync();
        }
    }, [article]);

    return (
        <div>
            {article ? <Article {...article} /> :
                <span>404: Article Not Found</span>
            }
        </div>
    );
}


export default ArticlePage;


