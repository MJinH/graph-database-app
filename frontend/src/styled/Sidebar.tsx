

import styled, { keyframes } from 'styled-components'

export const SidebarContainer = styled.div`
    width: 5%;
    height: 100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    background-color: #778899;
    position: relative;
`

export const SidebarWrapper = styled.div`
    padding: 1.5rem;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SidebarElements = styled.div`
    margin-top: 1.5rem;
    font-size: 1.5rem !important;
    color: #fff0f5;
    cursor: pointer;
    position: relative;

    &:last-of-type {
     position: absolute;
     bottom: 3rem;
    }
`
export const DatabaseSide = styled.div`
    position: absolute;
    height: 100%;
    width:0%;
    left: 5%;
    background-color: #808080;
    transition: 0.3s;
`

export const DatabaseSideWrapper = styled.div`
`

export const DatabaseSideElement = styled.div`
    padding: 1.5rem 1.5rem 0.5rem 0;
    margin: 0 1rem;
    color: #dcdcdc;
    font-weight: bold;
`

export const DatabaseSideType = styled.div`
    color: #f8f8ff;
    margin:0;
    padding:0;
    font-weight: bold;
    border-bottom: 1px solid #f8f8ff;
    margin-bottom: 1rem;
`

export const LabelWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`

export const NodeElement = styled.div`
    padding: 0.3rem 0.8rem;
    margin: 0 0.8rem 0.7rem 0;
    border-radius: 0.5rem;
    font-size: 0.7rem;
    font-weight: bold;
`

export const EdgeElement = styled.div`
    padding: 0.3rem 0.8rem;
    margin: 0 0.5rem 0.7rem 0;
    border-radius: 0.5rem;
    font-size: 0.77rem;
    font-weight: bold; 
    background-color: #b0c4de;
    color: #f5fffa;
`

export const labelColorSettings = [
    {background: '#00FFFF', color: '#778899'},
    {background: '#7fffd4', color: '#778899'},
    {background: '#7fff00', color: '#778899'},
    {background: '#ff00ff', color: '#f8f8ff'},
    {background: '#ffd700', color: '#778899'},
    {background: '#adff2f', color: '#778899'},
    {background: '#f0e68c', color: '#778899'},
    {background: '#ff6347', color: '#778899'},
    {background: '#d8bfd8', color: '#778899'},
    {background: '#fa8072', color: '#778899'},
]