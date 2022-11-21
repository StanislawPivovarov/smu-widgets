import styled from "styled-components";

export const AppsLinks = styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
justify-content: space-between;
@media(max-width: 768px){
    grid-template-columns: 50% 50%;
    justify-items: center;
    row-gap: 15px;
}
`

export const Store = styled.img`
width: 128px;
height: 36px;
`

export const Header = styled.h1`
font-size: 16px;
`

export const Content = styled.p`
font-size: 14px;
`

export const ContentList = styled.li`
font-size: 14px;
`

export const UlList = styled.ul`
padding-left: 24px;
`

export const GosKeyLink = styled.a`
display: block;
margin-bottom: 10px;
`

export const Download = styled.a`
margin-top: 30px;
margin-bottom: 10px;
width: 130px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

