import { StyledTopArticle } from './TopArticle.styled'

function TopArticle({ articles }) {

    const topStory = articles.length ? articles[0] : null

    return (
        topStory && <StyledTopArticle>
            <h2>Top Story</h2>
            <img src={topStory.urlToImage} alt={`Image for ${topStory.title} article`}/>
            <p>Date: {topStory.publishedAt}</p>
            <p>Title: {topStory.title}</p>
            <p>Description: {topStory.description}</p>
            <button>Read More</button>
        </StyledTopArticle>
    )
}

export {TopArticle}