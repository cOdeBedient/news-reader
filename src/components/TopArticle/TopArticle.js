function TopArticle({ articles }) {

    const topStory = articles.length ? articles[0] : null

    return (
        topStory && <>
            <h2>Top Story</h2>
            <img src={topStory.urlToImage} alt={`Image for ${topStory.title} article`}/>
            <p>Source: {topStory.source.name}</p>
            <p>Title: {topStory.title}</p>
            <p>Description: {topStory.description}</p>
            <button>Read More</button>
        </>
    )
}

export {TopArticle}