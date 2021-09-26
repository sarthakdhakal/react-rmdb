import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
align-items:center;
min-height:100px;
background:var(--darkgrey);
padding: 0 20px;`;

export const Content = styled.div`
display:flex;
max-width:var(--maxWidth);
width:100%;
margin:0 auto;

.column{
    display:flex;
    align-items:center;
    justify-content:center;
    background:var(--medgrey);
    border-radius:20px;
    margin:0 20px;
    flex:1;
    :first-child{
        margin-left:0;
    }
    :last-child{
        margin-right:0;
    }
    
}

@media screen and (max-width:768px){
    display:block;
    flex-direction:column;
    justify-content:center;
    max-width: 90%;


    .column{
        margin:10px 20px;
        
        :first-child{
            margin-left:20px;
        }
        :last-child{
            margin-right:20px;
        }
    }}

`;