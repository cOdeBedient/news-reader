import {StyledError} from './Error.styled'

export default function Error({ message }) {
    return (
        <StyledError>
            {message}
        </StyledError>
    )
}