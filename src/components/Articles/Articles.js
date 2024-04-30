import {ArticleThumb} from '../ArticleThumb/ArticleThumb'

function Articles({ articles }) {
console.log('articles', articles)
    const preppedArticles = articles.map((article) => {
        return (
            <>
                <h3>In Other News</h3>
                <ArticleThumb
                    title={article.title}
                    description={article.description}
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