import styled from "styled-components";

export const Links = styled.div`
margin-top: 22px;
display: flex;
flex-direction: row;
@media(max-width: 768px){
    flex-direction: column;
    gap: 10px;
}
`

export const LinkIcon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const Header = styled.h1`
font-size: 16px;
margin-bottom: 30px;
`

export const IconLink = styled.a`
margin-left: 8px;
`

export const ButtonsBlock = styled.div`
display: flex;
flex-direction: row-reverse;

`

export const RadioButtons = styled.div`
display: flex;
flex-direction: column;
`

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
max-width: 370px;
justify-content: space-between;
@media(max-width: 768px){
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;

}
`

export const Slash = styled.p`
@media(max-width: 768px){
    display: none;
}
`

export const IconVisability = styled.div`
@media(min-width: 768px){
    display: none;
}
`