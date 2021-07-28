

import { Component } from "react"
import ArticleList from "../components/ArticleList/ArticleList.js"
import { fetchArticlesBySection } from "../api/ArticlesAPI"

class SectionPage extends Component {
  state= {
    articles: []
  }
// helper methods

async updateArticlesForSection() {
  try {
    const sectionID = this.props.match.params.sectionID

    // fetch articles for section and update articles state val.
    const sectionArticles = await fetchArticlesBySection(sectionID);
    this.setState({ articles: sectionArticles });
  } catch (e) {
    console.error('error fetching articles: ', e);
  }

}

// life cycles
  componentDidMount() {
    this.updateArticlesForSection()
  }

  componentDidUpdate(prevProps) {
    
    //check
        console.log("previous: ", prevProps.match.params.sectionID)
        console.log("current: ", this.props.match.params.sectionID)

    if (prevProps.match.params.sectionID != this.props.match.params.sectionID)
      this.updateArticlesForSection()
  }

  // render
  render() {
    return (
      <div>
        <h1>{
          this.props.match.params.sectionID 
            ? `${this.props.match.params.sectionID} page`
            : "NO SECTION"

        }</h1>
          <ArticleList articles={this.state.articles}/>
      </div>

    )
  }
}

export default SectionPage;