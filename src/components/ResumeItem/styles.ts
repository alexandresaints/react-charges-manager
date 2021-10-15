import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 360px;
    margin-bottom: 40px;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #66666;
    margin-bottom: 5px;
    margin-right: 70px;
    font-size: 14px;
`

export const Info = styled.div<{color?: string}>`
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    color: ${props => props.color ?? '#000'};
`