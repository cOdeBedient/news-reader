import { StyledThumb } from './ArticleThumb.styled'
import { Link } from 'react-router-dom'

function ArticleThumb(props) {
    console.log('props all up in here here', props)
    const apple = "apple"

    return (
        <StyledThumb>
            <img src={props.image} alt={`Image for ${props.title} article`} />
            <h3>Date:</h3>
            <p>{props.publishedAt}</p>
            <h3>Title</h3>
            <p>{props.title}</p>
            <h3>Description</h3>
            <p>{props.description}</p>
            <h3>Source</h3>
            <p>{props.source}</p>
            <Link to={{pathname: `/${props.id}`, state: {apple} }}>
                <button>Read Article</button>
            </Link>
        </StyledThumb>
    )
}

export { ArticleThumb }