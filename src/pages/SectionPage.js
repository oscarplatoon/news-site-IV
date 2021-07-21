import { Component } from 'react';
import { fetchArticlesBySection } from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList'

class SectionPage extends Component {
    state = {
        articles: []
    };

    async componentDidMount() {
        const sectionID = this.props.match.params.sectionID;

        try {
            const articlesJson = await fetchArticlesBySection(sectionID);
            this.setState({ articles: articlesJson });
        } catch (e) {
            console.error('error fetching articles: ', e);
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.match.params.sectionID === prevProps.match.params.sectionID) return;

        const sectionID = this.props.match.params.sectionID;
        try {
            const articlesJson = await fetchArticlesBySection(sectionID);
            this.setState({ articles: articlesJson });
        } catch (e) {
            console.error('error fetching articles: ', e);
        }
    }

    // When user clicks on section link, SectionPage's props change and SectionPage re-renders. But still shows same thing b/c API call is only made inside componentDidMount(). Solved it using componentDidUpdate().
    render() {
        return (
            <div>
                <ArticleList articles={this.state.articles} />
            </div>
        );
    }
}

export default SectionPage;