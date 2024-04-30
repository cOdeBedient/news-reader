function TopArticle({ articles }) {

    const topStory = articles.length ? articles[0] : null

    return (
        topStory && <>
            <h2>Top Story</h2>
            <p>{topStory.title}</p>
            <p>{topStory.description}</p>
            <button>Read More</button>
        </>
    )
}

export {TopArticle}