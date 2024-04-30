import {StyledFullArticle} from './FullArticle.styled'
import {useParams} from 'react-router-dom'


function FullArticle({ articles }) {
    const { id } = useParams()
    console.log('id', id)
    const currentArticle = articles.find(article => article.id.toString() === id)

console.log('currentArticle', currentArticle)
    return (
        <StyledFullArticle>
            <h1>Full Article</h1>
            <p>{currentArticle.content}</p>
        </StyledFullArticle>
    )
}

export {FullArticle}