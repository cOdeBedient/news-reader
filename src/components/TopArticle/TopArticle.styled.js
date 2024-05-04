import styled from 'styled-components';

export const StyledTopArticle = styled.div`
    padding-bottom: 2vh;

    img {
        width: 45vw;
        height: 100%;
    }

    section {
        display: flex;
        align-items: center;
        background-color: silver;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 2em;
    }

    .top-story-details {
        margin-left: 2vw;
        padding-right: 1.5vw;
    }

    p {
        font-size: 1.1em;
        margin-top: 0;
    }

    @media screen and (max-width: 1024px) {
        h3 {
        font-size: 1.5em;
        }

        button {
            margin-bottom: 5px;
        }
    }

    @media screen and (max-width: 768px) {
        section {
            flex-direction: column;
        }

        img {
            width: 90%;
        }
    }

    @media screen and (max-width: 430px) {
        h3 {
            font-size: 1.3em;
        }
    }

`