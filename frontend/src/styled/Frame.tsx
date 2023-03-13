import styled from "styled-components";

export const FrameGlobalWrapper = styled.div`
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
`

export const FrameWrapper = styled.div`
    padding: 0 1.5rem;
    height: 35rem;
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
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


export const FrameContext = styled.div`
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

export const GraphFrameContainer = styled.div`
    height: 45rem;
    padding: 0 1.5rem;
    margin-bottom: 1rem;
`

export const GraphFrameWrapper = styled.div`
    background-color: #FFFFFF;
    margin-bottom: 1rem;
    height: 100%;
    overflow:hidden;
`

export const GraphFrameTop = styled.div`
    display:flex;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #DCDCDC;
`
export const GraphFrameIcon = styled.div`
    flex:1;
    position: relative;
`

export const GraphFrameCommand = styled.div`
    flex:3;
`

export const GraphFrameMid = styled.div`
    display:flex;
    width: 100%;
    border-bottom: 1px solid #DCDCDC;
    padding: 0.3rem 1rem;
`

export const ThreeCanvas = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    margin:0;
    position: absolute;
    overflow: hidden;
    top:0;
    left:0;
`

export const RenderButton = styled.button`
    position: absolute;
    width: 5rem;
    hegiht: 5rem;
    background-color: #8FBC8F;
    top: 2rem;
    left: 3rem;
    z-index: 999;
    cursor: pointer;
`

export const elementColorSettings = [
    {background: '#00FFFF', fontColor: '#2A2C34', borderColor: '#FF8C00'},
    {background: '#7fffd4', fontColor: '#2A2C34', borderColor: '#8FBC8F'},
    {background: '#7fff00', fontColor: '#2A2C34', borderColor: '#00CED1'},
    {background: '#ff00ff', fontColor: '#2A2C34', borderColor: '#696969'},
    {background: '#ffd700', fontColor: '#2A2C34', borderColor: '#F8F8FF'},
    {background: '#adff2f', fontColor: '#2A2C34', borderColor: '#ADFF2F'},
    {background: '#f0e68c', fontColor: '#2A2C34', borderColor: '#4B0082'},
    {background: '#ff6347', fontColor: '#2A2C34', borderColor: '#FFF0F5'},
    {background: '#d8bfd8', fontColor: '#2A2C34', borderColor: '#FFB6C1'},
    {background: '#fa8072', fontColor: '#2A2C34', borderColor: '#32CD32'},
]