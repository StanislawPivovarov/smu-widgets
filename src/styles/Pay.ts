import styled from "styled-components"

export const ContentWrapper = styled.div`
max-width: 600px;
margin: 0 auto;
padding: 0 16px;
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
export const DownloadSign = styled.div`
display: flex;
@media(max-width: 768px){
    margin-left: 11px;
}
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