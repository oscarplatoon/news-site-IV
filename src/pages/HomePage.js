import React, { Component, useRef } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticles, searchArticles } from '../api/ArticlesAPI';
import { InputGroup, Input } from 'reactstrap';


function HomePage(props) {
    const [articles, setArticles] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');

    const prevSearchText = useRef();  // initially 'undefined' so line 17's comparison fails on first run, so we actually load articles initially

    // Using useRef() so that component only re-renders when inputtext is different from previous one, rather than re-rendering w/ an infinite loop
    React.useEffect(() => {
        console.log('hi');
        const fetchArticlesAsync = async () => {
            if (prevSearchText.current === searchText) return;  // does nothing if prevSearchText is same as current searchText

            prevSearchText.current = searchText;  // updates prevSearchText to the current searchText for the next invocation of useEffect
            try {
                if (searchText) {
                    const searchedJson = await searchArticles(searchText);
                    setArticles(searchedJson);
                } else {
                    const articlesJson = await fetchArticles();
                    setArticles(articlesJson);
                };
            } catch (e) {
                console.error('Error: ' + e)
            }
        }
        fetchArticlesAsync();
    }, [articles, searchText]);

    const handleSearch = (e) => setSearchText(e.target.value);

    return (
        <div>
            <InputGroup>
                <Input onChange={(e) => handleSearch(e)} type="text" placeholder="Search" />
            </InputGroup>
            <ArticleList articles={articles} />
        </div>
    );
}


export default HomePage;


