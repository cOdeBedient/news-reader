import {StyledMainPage} from './MainPage.styled'
import {Header} from '../Header/Header'
import {TopArticle} from '../TopArticle/TopArticle'
import {Articles} from '../Articles/Articles'
import {dummyData} from '../../dummy-data/dummyData'
import {useState, useEffect} from 'react'

function MainPage() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      setArticles(dummyData.articles)
    }, [])

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

export {MainPage}