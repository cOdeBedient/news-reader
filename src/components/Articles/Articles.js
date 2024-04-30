import {ArticleThumb} from '../ArticleThumb/ArticleThumb'

function Articles({ articles }) {
    const preppedArticles = articles.map((article) => {
        return (
            <>
                <h3>In Other News</h3>
                <ArticleThumb
                    key={article.title}
                    title={article.title}
                    description={article.description}
                    image={article.urlToImage}
                    source={article.source.name}
                />
            </>
        )
    })

    preppedArticles.shift()

    return (
        <>
            {preppedArticles}
        </>
    )
}

export {Articles}