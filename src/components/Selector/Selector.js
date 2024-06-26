import { StyledSelector } from './Selector.styled'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Selector({ sortArticles }) {
    // const [selectorValue, setSelectorValue] = useState('date')

    function handleChange(e) {
        const newSelector = e.target.value

        sortArticles(newSelector)
    }

    return (
        <StyledSelector>
            <p>sort by:</p>
            <select name="sorter" id="sorter" onChange={e => handleChange(e)}>
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="source">Source</option>
            </select>
        </StyledSelector>
    )
}

Selector.propTypes = {
    sortArticles: PropTypes.func.isRequired,
}

export { Selector }