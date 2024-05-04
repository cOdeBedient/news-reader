import { StyledThumb } from './ArticleThumb.styled'
import { Link } from 'react-router-dom'

function ArticleThumb(props) {

    return (
        <StyledThumb>
            <Link to={`/article/${props.id}`}>
                <img src={props.image} alt={`Image for ${props.title} article`} />
            </Link>
            <p>{props.date}</p>
            <Link to={`/article/${props.id}`}>
                <h3>{props.title}</h3>
            </Link>
            <p>{props.description}</p>
            {/* <h3>Source</h3>
            <p>{props.source}</p> */}
            <Link to={`/article/${props.id}`}>
                <button>Read Article</button>
            </Link>
        </StyledThumb>
    )
}

export { ArticleThumb }