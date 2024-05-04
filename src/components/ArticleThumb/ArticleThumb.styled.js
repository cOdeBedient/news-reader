import styled from 'styled-components';

export const StyledThumb = styled.div`
    width: 30vw;
    margin-bottom: 2vh;

    img {
        width: 100%;
    }

    a {
        font-size: 1em;
        margin-top: 0;
        margin-bottom: 1vh;
        text-decoration: none;
        color: black; 
    }

    p {
        font-size: .9em;
        margin-top: 0;
        margin-bottom: 3px;
    }

    button {
        margin-top: 1vh;
    }

    h5 {
        font-size: 1.2em;
        margin-top: 5px;
        margin-bottom: 15px;

    }

    @media screen and (max-width: 768px) {
        width: 45vw;
    }

    @media screen and (max-width: 585px) {
        width: 90vw;
    }

`