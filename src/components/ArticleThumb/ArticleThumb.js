import { StyledThumb } from './ArticleThumb.styled'
import { Link } from 'react-router-dom'

function ArticleThumb(props) {

    return (
        <StyledThumb>
            <img src={props.image} alt={`Image for ${props.title} article`} />
            <h3>Date:</h3>
            <p>{props.date}</p>
            <h3>Title</h3>
            <p>{props.title}</p>
            <h3>Description</h3>
            <p>{props.description}</p>
            {/* <h3>Source</h3>
            <p>{props.source}</p> */}
            <Link to={`/${props.id}`}>
                <button>Read Article</button>
            </Link>
        </StyledThumb>
    )
}

export { ArticleThumb }