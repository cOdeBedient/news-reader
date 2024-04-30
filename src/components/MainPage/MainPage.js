import {StyledMainPage} from './MainPage.styled'
import {Header} from '../Header/Header'
import {TopArticle} from '../TopArticle/TopArticle'
import {Articles} from '../Articles/Articles'


function MainPage({ articles }) {

    return (
        <>
            <Header />
            <StyledMainPage>
                <img src='/assets/newspapers-2.jpg' alt="stock news image"/>
                <TopArticle articles={articles}/>
                <Articles articles={articles}/>
            </StyledMainPage>
        </>
    )
}

export { MainPage }