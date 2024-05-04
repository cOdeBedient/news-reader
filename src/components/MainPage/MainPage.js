import {StyledMainPage} from './MainPage.styled'
import {TopArticle} from '../TopArticle/TopArticle'
import {Articles} from '../Articles/Articles'


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

export { MainPage }