import styled from "styled-components";

export const Pokemon = styled.article`
    text-align: center;
    background-color: #fdfdfd;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    > header {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;

        > h2 {
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 1.5px;
        }

        > h3 {
            font-size: 1.125rem;
            font-weight: 400;

            > span {
                font-weight: 600;
                font-size: 1.25rem;
            }
        }

        > img {
            animation: bounce 1s infinite alternate;
            width: 150px;
            margin: 0 auto;
        }
    }

    > button {
        outline: none;
        cursor: pointer;
        border: none;
        font-size: 1.125rem;
        background-color: transparent;
        margin-bottom: 1rem;
        color: #2e86de;
        font-weight: 500;

        &:hover,
        &:active {
            text-decoration: underline;
        }
    }

    @keyframes bounce {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-10px);
        }
    }
`;

export const PokemonInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;

    .types {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        position: relative;

        &::before {
            content: "";
            width: 2px;
            height: 20px;
            background-color: #7f8c8d;
            position: absolute;
            left: -.75rem;
            opacity: .8;
        }

        > p {
            font-weight: 600;
            font-size: 1.25rem;
            color: #2c3e50;
            position: relative;
        }

        > p + p {
            &::before {
                color: #7f8c8d;
                content: "/";
                margin-right: 0.5rem;
            }
        }
    }

    > p {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        > span {
            font-size: 1.125rem;
            font-weight: 600;
        }
    }

    &::after {
        content: "";
        height: 1px;
        width: 70%;
        background-color: #7f8c8d;
        position: absolute;
        bottom: -1rem;
    }
`;

export const PokemonStats = styled.div`
    h3 {
        font-weight: 400;
        font-size: 1.25rem;
    }

    > div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
`;
