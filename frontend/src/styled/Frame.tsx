import styled from "styled-components";

export const FrameWrapper = styled.div`
    padding: 0 1.5rem;
    height: 35rem;
    display: flex;
    margin-top: 1rem;

    form {
        padding: 2rem;
        flex: 3;
        div {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            input {
                width: 50%;
            }
        }

        button {
            margin-top: 1rem;
        }
    }
`
export const FrameTab = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f0fff0;
    display: flex;
`


export const FrameContext =styled.div`
    padding: 2rem;
    padding-top: 5rem;
    flex: 1;
    span:first-of-type {
        font-size: 1.5rem;
    }
    span:last-of-type {
        font-size: 1.1rem;
    }
`