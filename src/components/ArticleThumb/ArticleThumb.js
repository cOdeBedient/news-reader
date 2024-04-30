import { StyledThumb } from './ArticleThumb.styled'

function ArticleThumb({title, description, image, source}) {
    return (
        <StyledThumb>
            <img src={image} alt={`Image for ${title} article`} />
            <h3>Title</h3>
            <p>{title}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Source</h3>
            <p>{source}</p>
        </StyledThumb>
    )
}

export { ArticleThumb }