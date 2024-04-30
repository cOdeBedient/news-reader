function ArticleThumb({title, description}) {
    console.log('title', title)
    return (
        <>
            <h3>Title</h3>
            <p>{title}</p>
            <h3>Description</h3>
            <p>{description}</p>
        </>
    )
}

export { ArticleThumb }