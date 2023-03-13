

import styled from "styled-components";


export const EditorContainer = styled.div`
    flex:3;
    display: flex;
    flex-direction: column;
    background-color: #f0ffff;
    box-sizing: border-box;
`

export const EditorWrapper = styled.div`
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
`

export const EditorTab = styled.div`
    width: 100%;
    height: 3rem;
    background-color: white;
    border: 1px solid #dcdcdc;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const TextAreaWrapper = styled.div`
    border: 1px solid #dcdcdc;
    height: 70%;
    width: 100%;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d3d3d3;
        margin: 0 1rem;
        font-weight: bold;
    }
`

export const TextArea = styled.textarea`
    height: 50%;
    width: 100%;
    resize: none;
    overflow: hidden;
    border: none;
    outline: none;
    box-sizing: border-box;
`

export const CommandIcon = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    cursor: pointer;
    color: #48d1cc;
`