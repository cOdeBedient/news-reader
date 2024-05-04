import {StyledMainPage} from './MainPage.styled'
import {TopArticle} from '../TopArticle/TopArticle'
import {Articles} from '../Articles/Articles'
import PropTypes from 'prop-types'


function MainPage({ articles, sortArticles }) {

    return (
        <>
            <StyledMainPage>
                {/* <img className='banner' src='/assets/newspapers-2.jpg' alt="stock news image"/> */}
                <TopArticle articles={articles}/>
                <Articles articles={articles} sortArticles={sortArticles}/>
            </StyledMainPage>
        </>
    )
}

MainPage.propTypes = {
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
    sortArticles: PropTypes.func.isRequired,
}

export { MainPage }