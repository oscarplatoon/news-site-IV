

import { Component } from "react"
import ArticleList from "../components/ArticleList/ArticleList.js"

class SectionPage extends Component {
  state= {
    articles: []
  }
  render() {
    return (
      <div>
        <h1>This is my SECTION page</h1>
          <ArticleList articles={this.state.articles}/>
      </div>

    )
  }
}

export default SectionPage;