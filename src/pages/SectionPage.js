import { Component } from "react"
import ArticleList from "../components/ArticleList/ArticleList"
import { fetchArticlesBySection } from "../api/ArticlesAPI"

class SectionPage extends Component {
  state = {
    articles: [],
  }
  
  // helper methods
  async updateArticlesForSection() {
    console.log("I'm updating the articles")
    
    try {
      const sectionID = this.props.match.params.sectionID

      // fetch articles for section and update articles state value
      const sectionArticles = await fetchArticlesBySection(sectionID);
      console.log("HEY I'M HERE!!!!!")
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
    if (prevProps.match.params.sectionID != this.props.match.params.sectionID)
      this.updateArticlesForSection()
    console.log("prev:", prevProps.match.params.sectionID)
    console.log("curr:", this.props.match.params.sectionID)
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
        <ArticleList articles={this.state.articles} />
      </div>
    )
  }
}

export default SectionPage;