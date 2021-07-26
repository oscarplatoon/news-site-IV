import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticlesBySection } from '../api/ArticlesAPI';

class SectionPage extends Component {
  state = {
    articles: []
  };

  async updateSectionData() {
    try {
      const articlesJson = await fetchArticlesBySection(this.props.match.params.sectionName);
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }

  async componentDidMount() {
    this.updateSectionData();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.sectionName != this.props.match.params.sectionName) {
      this.updateSectionData();
   }
  } 

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default SectionPage;