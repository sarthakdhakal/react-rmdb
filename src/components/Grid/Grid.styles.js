import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 80px;
    
    h1{
        color: var(--medGray);

        @media screen and (max-width: 1080px){
            font-size: var(--fontBig); 
        }
    }
    `;
export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap:  2rem`;
