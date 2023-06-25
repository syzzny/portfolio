import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const HeaderStyle = styled.header`
    max-width: 1700px;
    margin: 0 auto;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.smallScreen ? '#FFFFFF' : 'transparent'};
`
export const InnerStyle = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const MenuStyle = styled.ul`
    font-size: 20px;
    list-style: none;
    display: flex;
    gap: 35px;
    color: #2E2E2E;
`
export const LinkStyle = styled(Link)`
    color: #2E2E2E;
    text-decoration: none;
`