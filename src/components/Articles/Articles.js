import {ArticleThumb} from '../ArticleThumb/ArticleThumb'
import {Selector} from '../Selector/Selector'
import {StyledArticles} from './Articles.styled'


function Articles({ articles, sortArticles }) {
    const preppedArticles = articles.map((article) => {
        return (
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
        )
    })

    preppedArticles.shift()

    return (
        <StyledArticles>
            <div className='selector-container'>
                <h4>In Other News</h4>
                <Selector sortArticles={sortArticles}/>
            </div>
            <section className='articles-container'>
                {preppedArticles}
            </section>
        </StyledArticles>
    )
}

export {Articles}