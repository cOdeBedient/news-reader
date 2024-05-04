import { StyledThumb } from './ArticleThumb.styled'
import { Link } from 'react-router-dom'

function ArticleThumb(props) {

    return (
        <StyledThumb>
            <Link to={`/article/${props.id}`}>
                <img src={props.image} alt={`Image for ${props.title} article`} />
            </Link>
            <p>{props.date} | {props.source}</p>
            <Link to={`/article/${props.id}`}>
                <h5>{props.title}</h5>
            </Link>
            <p>{props.description}</p>
            <Link to={`/article/${props.id}`}>
                <button>Read Article</button>
            </Link>
        </StyledThumb>
    )
}

export { ArticleThumb }