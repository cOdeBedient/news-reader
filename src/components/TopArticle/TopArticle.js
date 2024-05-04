import { StyledTopArticle } from './TopArticle.styled'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function TopArticle({ articles }) {

    const topStory = articles.length ? articles[0] : null

    return (
        topStory && <StyledTopArticle>
            <section className="top-story-container">
                <img src={topStory.urlToImage} alt={`Image for ${topStory.title} article`}/>
                <div className="top-story-details">
                    <h3>{topStory.title}</h3>
                    <p>{topStory.publishedAt} | {topStory.source.name}</p>
                    <p>{topStory.description}</p>
                    <Link to={`/article/${topStory.id}`}>
                        <button>Read Full Article</button>
                    </Link>
                </div>
            </section>
        </StyledTopArticle>
    )
}

TopArticle.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        source: PropTypes.shape({
            name: PropTypes.string
        }),
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string,
        content: PropTypes.string
     })).isRequired,
}

export {TopArticle}