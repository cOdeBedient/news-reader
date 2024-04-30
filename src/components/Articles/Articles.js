import {ArticleThumb} from '../ArticleThumb/ArticleThumb'
import {Selector} from '../Selector/Selector'


function Articles({ articles, sortArticles }) {
    const preppedArticles = articles.map((article) => {
        return (
            <>
                <h3>In Other News</h3>
                <Selector sortArticles={sortArticles}/>
                <ArticleThumb
                    id={article.id}
                    key={article.id}
                    date={article.publishedAt}
                    title={article.title}
                    description={article.description}
                    image={article.urlToImage}
                    source={article.source.name}
                    content={article.content}
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