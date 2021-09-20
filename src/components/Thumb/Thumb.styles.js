import styled from "styled-components";

export const Wrapper = styled.div`   
width: 100%;
background: goldenrod;
border-radius: 10px;
text-align: center;
color:white;
padding-bottom:3px;
.movie-title{
    font-size: 20px;
    padding :0 5px;
}
cursor: pointer;
`;

export const Image = styled.img`
width: 100%;
max-width: 720px;
transition:all 0.3s;
object-fit: cover;
border-radius:10px 10px 0 0 ;
    animation: animateThumb 0.5s;
    /* color: var(--color); */
    :hover { 
        opacity: 0.5;
    }
    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to{
            opacity:1;
        }
    }
    
    `;