import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: black;
    color: white;
    overflow: hidden;
    text-wrap: nowrap;

    h1 {
        font-size: 1.7em;
        margin-bottom: 3px;
        margin-top: 2px;
        padding-left: 5px;
    }

    @media screen and (max-width: 585px) {
        h1 {
            font-size: 1.3em
        }
    }
`