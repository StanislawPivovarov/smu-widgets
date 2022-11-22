import styled from "styled-components";

export const HeaderForm = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media(max-width: 768px){
    flex-direction: column;
}
`

export const FormHeader = styled.h1`
font-size: 16px;
padding: 8px 12px;
border-bottom: 1px solid #D9D9D9;
`

export const HeaderText = styled.h1`
font-size: 16px;

`

export const FormFilling = styled.div`
padding: 0px 36px;
`