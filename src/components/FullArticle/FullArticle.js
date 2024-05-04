import {StyledFullArticle} from './FullArticle.styled'
import {Header} from '../Header/Header'
import {useParams} from 'react-router-dom'


function FullArticle({ articles }) {
    const { id } = useParams()
    const currentArticle = articles.find(article => article.id.toString() === id)

console.log('currentArticle', currentArticle)
    return (
        <>
            <StyledFullArticle>
                <h2>{currentArticle.title}</h2>
                <img src={currentArticle.urlToImage} alt={`Image for ${currentArticle.title}`} />
                {/* <p>Source: {currentArticle.source.name}</p> */}
                <p>{currentArticle.publishedAt} </p>
                <p className='full-content'>{currentArticle.content}</p>
            </StyledFullArticle>
        </>
    )
}

export {FullArticle}