import { Component, useState, useEffect } from 'react';
import { fetchArticlesBySection } from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList'


function SectionPage(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const sectionID = props.match.params.sectionID;

        const fetchArticlesBySecAsync = async () => {
            try {
                const articlesJson = await fetchArticlesBySection(sectionID);
                setArticles(articlesJson);
            } catch (e) {
                console.error('error fetching articles: ', e);
            }
        }

        fetchArticlesBySecAsync();
    })

    return (
        <div>
            <ArticleList articles={articles} />
        </div>
    );
}


export default SectionPage;