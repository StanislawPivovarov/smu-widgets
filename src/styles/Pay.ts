import styled from "styled-components"

export const ContentWrapper = styled.div`
max-width: 600px;
margin: 0 auto;
padding: 0 16px;
`

export const Buttons = styled.div`
display: flex;
flex-direction: row;
@media(max-width: 768px){
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;
}
`

export const ButtonsDownload = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const DownloadParagraph = styled.div`
display: flex;
margin-left: 11px;
`

export const PayHeader = styled.h1`
margin-top: 24px;
font-size: 16px;
`

export const IconVisability = styled.div`
@media(min-width: 768px){
    display: none;
}
`

export const Slash = styled.p`
@media(max-width: 768px){
    display: none;
}
`