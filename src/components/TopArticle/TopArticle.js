import { StyledTopArticle } from './TopArticle.styled'
import { Link } from 'react-router-dom'

function TopArticle({ articles }) {

    const topStory = articles.length ? articles[0] : null

    return (
        topStory && <StyledTopArticle>
            <h2>Breaking News</h2>
            <section className="top-story-container">
                <img src={topStory.urlToImage} alt={`Image for ${topStory.title} article`}/>
                <div className="top-story-details">
                    <h3>{topStory.title}</h3>
                    <p>{topStory.publishedAt}</p>
                    <p>{topStory.description}</p>
                    <Link to={`/${topStory.id}`}>
                        <button>Read Article</button>
                    </Link>
                </div>
            </section>
        </StyledTopArticle>
    )
}

export {TopArticle}